import en from '../messages/en.json';
import fa from '../messages/fa.json';

export type CvExperience = {
  company: string;
  title: string;
  years: string;
  details: string;
};

export type CvEducation = {
  school: string;
  years: string;
  details: string;
};

export type CvProfile = {
  name: string;
  role: string;
  summary: string;
  skills: string[];
  experience: CvExperience[];
  education: CvEducation[];
};

const profiles: Record<string, CvProfile> = {
  en: en.cv as CvProfile,
  fa: fa.cv as CvProfile
};

export function getCvProfile(locale: string): CvProfile {
  return profiles[locale] ?? profiles.en;
}
