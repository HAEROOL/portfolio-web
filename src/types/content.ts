export interface PortfolioContent {
  hero: {
    badge: string;
    badgeStatus: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    quote: {
      text: string;
      subtext: string;
    };
    buttons: {
      start: string;
      subscribe: string;
    };
    image: string;
  };
  trackList: {
    title: string;
    subtitle: string;
    tracks: Array<{
      id: string;
      title: string;
      subtitle: string;
      genre: string;
      desc: string;
      stack: string[];
      color: string;
      image: string;
      url: string;
      period: string;
      platforms: string[];
      team_size: string;
      role: string;
      award?: string;
      tech_stack: Record<string, Record<string, string> | string>;
      tech_rationale?: string[];
      key_features: string[] | Record<string, string[] | string>;
      contributions: string[];
    }>;
  };
  skills: {
    title: string;
    skills: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
    stickers: string[];
  };
  fanMail: {
    title: string;
    address: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      button: string;
    };
    footer: {
      copyright: string;
      credits: string;
    };
  };
  resume: {
    education_and_military: {
      education: Array<{
        institution?: string;
        program?: string;
        major?: string;
        period: string;
      }>;
    };
    work_experience: Array<{
      company: string;
      period: string;
      department?: string;
      role?: string;
      tasks: string[];
    }>;
    awards_and_activities: {
      awards: Array<{
        title: string;
        date: string;
      }>;
      activities: Array<{
        organization: string;
        period: string;
        experience: string[];
      }>;
    };
    technical_skills: {
      languages: Record<string, string>;
      frontend: Record<string, string>;
      tools: Record<string, string>;
    };
  };
}

export interface ContentData {
  portfolio: PortfolioContent;
}
