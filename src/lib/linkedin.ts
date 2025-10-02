export interface LinkedInCert {
  name: string | null;
  issuer: string | null;
  url: string | null;
  credential_id: string | null;
  issued: string | null;
  expires: string | null;
}

export interface LinkedInEdu {
  school: string | null;
  degree: string | null;
  field_of_study: string | null;
  start_date: string | null;
  end_date: string | null;
  grade: string | null;
}

export interface LinkedInExp {
  title: string | null;
  company: string | null;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  employment_type: string | null;
}

export interface LinkedInProfile {
  username: string | null;
  full_name: string | null;
  headline: string | null;
  summary: string | null;
  profile_pic_url: string | null;
  experiences: LinkedInExp[];
  education: LinkedInEdu[];
  certifications: LinkedInCert[];
  skills: string[];
}

export async function fetchLinkedInProfile(signal?: AbortSignal): Promise<LinkedInProfile | null> {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}linkedin.json`, { signal });
    if (!res.ok) return null;
    const data = (await res.json()) as LinkedInProfile;
    return data;
  } catch {
    return null;
  }
}
