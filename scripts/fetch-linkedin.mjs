// Optional build-time fetch of LinkedIn profile via Proxycurl
// Usage:
//   LINKEDIN_URL="https://www.linkedin.com/in/username/" PROXYCURL_API_KEY="..." node scripts/fetch-linkedin.mjs
// Writes:
//   public/linkedin.json (consumed by the app at runtime)

import { writeFile } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const LINKEDIN_URL = process.env.LINKEDIN_URL;
const API_KEY = process.env.PROXYCURL_API_KEY;

async function main() {
  if (!LINKEDIN_URL || !API_KEY) {
    console.log('[fetch-linkedin] Skipped (set LINKEDIN_URL and PROXYCURL_API_KEY to enable).');
    return;
  }

  const endpoint = new URL('https://nubela.co/proxycurl/api/v2/linkedin');
  endpoint.searchParams.set('url', LINKEDIN_URL);
  // Recommended query params to enrich data can be added as needed

  console.log(`[fetch-linkedin] Fetching LinkedIn profile for ${LINKEDIN_URL}`);
  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    console.warn(`[fetch-linkedin] Request failed: ${res.status} ${res.statusText}`);
    return;
  }

  const raw = await res.json();

  // Minimal mapping to a lean JSON for the app (avoid dumping the entire payload)
  const data = {
    username: raw.public_identifier ?? null,
    full_name: raw.full_name ?? null,
    headline: raw.headline ?? null,
    summary: raw.summary ?? null,
    profile_pic_url: raw.profile_pic_url ?? null,
    experiences: Array.isArray(raw.experiences)
      ? raw.experiences.map((e) => ({
          title: e.title ?? null,
          company: e.company ?? e.company_name ?? null,
          location: e.location ?? null,
          start_date: e.starts_at ?? null,
          end_date: e.ends_at ?? null,
          description: e.description ?? null,
          employment_type: e.employment_type ?? null,
        }))
      : [],
    education: Array.isArray(raw.education)
      ? raw.education.map((ed) => ({
          school: ed.school ?? ed.school_name ?? null,
          degree: ed.degree_name ?? ed.degree ?? null,
          field_of_study: ed.field_of_study ?? null,
          start_date: ed.starts_at ?? null,
          end_date: ed.ends_at ?? null,
          grade: ed.grade ?? null,
        }))
      : [],
    certifications: Array.isArray(raw.accomplishment_certifications)
      ? raw.accomplishment_certifications.map((c) => ({
          name: c.name ?? null,
          issuer: c.authority ?? null,
          url: c.url ?? null,
          credential_id: c.license_number ?? null,
          issued: c.start_date ?? null,
          expires: c.end_date ?? null,
        }))
      : [],
    skills: Array.isArray(raw.skills)
      ? raw.skills.map((s) => (typeof s === 'string' ? s : s.name ?? null)).filter(Boolean)
      : [],
  };

  const outPath = resolve(process.cwd(), 'public', 'linkedin.json');
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`[fetch-linkedin] Wrote ${outPath}`);
}

main().catch((err) => {
  console.error('[fetch-linkedin] Error', err);
  process.exitCode = 0; // Do not fail the build
});
