export interface ResumeProject {
  title: string;
  period: string;
  link: string;
  skills: string[];
  description: string;
  contents: string[];
  results: string[];
}

export interface OtherExperienceProps {
  title: string;
  items: {
    text: string;
    link: string;
    subText: string;
  }[];
}

export interface ExperienceProps {
  companyName: string;
  companyPeriod: string;
  projects: ResumeProject[];
}
