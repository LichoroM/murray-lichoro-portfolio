// Contact form submission utility using Web3Forms
// https://web3forms.com/
// This avoids server-side code for a quick, reliable email relay.

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  const subjectPrefix = (import.meta.env.VITE_CONTACT_SUBJECT_PREFIX as string | undefined) || '';
  // Note: For fetch-based SPA submissions, we do not use a backend redirect field.
  const enableCaptcha = (import.meta.env.VITE_CONTACT_ENABLE_CAPTCHA as string | undefined) === 'true';
  if (!accessKey) {
    return { ok: false, message: 'Missing Web3Forms access key. Set VITE_WEB3FORMS_KEY in your .env.' };
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('name', payload.name);
  formData.append('email', payload.email);
  const finalSubject = subjectPrefix ? `${subjectPrefix} ${payload.subject}` : payload.subject;
  formData.append('subject', finalSubject);
  formData.append('message', payload.message);

  // Optional honeypot field to reduce spam
  formData.append('botcheck', '');
  // Set reply-to so replies go to the sender's email
  formData.append('replyto', 'email');
  // Optional redirect after success (DISABLED for fetch-based submissions).
  // If you are submitting via a normal HTML form (not fetch), you can enable
  // the redirect in your dashboard or send the field below. For SPA fetch flows,
  // we rely on client-side navigation to a Thank You route to avoid non-JSON responses.
  // if (redirectUrl) formData.append('redirect', redirectUrl);
  // Optional captcha (enable in your Web3Forms dashboard as well)
  if (enableCaptcha) formData.append('captcha', 'true');

  // Setup a timeout to avoid indefinite hanging
  const controller = new AbortController();
  const timeoutMs = 15000; // 15s
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });

    // Determine content type to decide how to parse
    const contentType = res.headers.get('content-type') || '';
    let data: { success?: boolean; message?: string } | null = null;

    if (contentType.includes('application/json')) {
      try {
        data = (await res.json()) as { success?: boolean; message?: string };
      } catch (parseErr) {
        console.warn('[contact] JSON parse failed despite JSON content-type', parseErr);
      }
    } else {
      // Treat non-JSON successful responses as success (often due to provider redirects)
      if (res.ok) {
        return { ok: true, message: 'Form submitted successfully.' };
      }
      // Fallback to text for diagnostics when not OK
      const text = await res.text().catch(() => '');
      console.warn('[contact] Non-JSON non-OK response', { status: res.status, text: text?.slice(0, 280) });
    }

    if (!res.ok) {
      const statusMsg = data?.message || `Request failed (${res.status}). Please try again.`;
      return { ok: false, message: statusMsg };
    }

    if (data?.success) {
      return { ok: true, message: data.message || 'Form submitted successfully.' };
    }
    return { ok: false, message: data?.message || 'Submission failed. Please try again later.' };
  } catch (err: unknown) {
    // Provide more actionable hints
    const isOffline = typeof navigator !== 'undefined' && navigator && 'onLine' in navigator && !navigator.onLine;
    if (isOffline) {
      return { ok: false, message: 'You appear to be offline. Please reconnect to the internet and try again.' };
    }
    if (err instanceof DOMException && err.name === 'AbortError') {
      return { ok: false, message: 'The request timed out. Please try again.' };
    }
    console.error('[contact] Network error submitting form', err);
    return {
      ok: false,
      message:
        'Network error. If this persists, disable ad blockers/VPN, check firewall, or try a different network and try again.',
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
