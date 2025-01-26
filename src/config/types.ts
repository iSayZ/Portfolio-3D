// Contents config types

export interface SectionConfig {
  title: string;
  description: string;
}

export interface ContentsConfig {
  hero: SectionConfig;
  about: SectionConfig;
}

// Links config types

export interface SocialLink {
  url: string;
}

export interface SocialLinks {
  github: SocialLink;
  linkedin: SocialLink;
  mail: SocialLink;
}

export interface FooterUtilLink {
  label: string;
  url: string;
}

export interface FooterUtilsLinks {
  windowsPortfolio: FooterUtilLink;
}
