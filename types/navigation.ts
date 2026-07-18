export interface NavItem {
  label: string;
  href: string;
  /** Show in mobile menu */
  mobile?: boolean;
  /** External link */
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface Navigation {
  main: NavItem[];
  footer: FooterColumn[];
}
