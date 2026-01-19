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
      genre: string;
      desc: string;
      stack: string[];
      color: string;
      image: string;
    }>;
  };
  inventory: {
    title: string;
    skills: Array<{
      name: string;
      icon: string;
      level: number;
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
