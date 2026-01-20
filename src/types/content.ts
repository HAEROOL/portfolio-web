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
    level: string;
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
  inventory: {
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
}

export interface ContentData {
  portfolio: PortfolioContent;
}
