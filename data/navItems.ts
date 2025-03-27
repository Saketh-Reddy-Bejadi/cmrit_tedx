export interface NavItem {
  name: string;
  path: string;
  hash: string;
}

export const navItems: NavItem[] = [
  { name: "Home", path: "/", hash: "" },
  { name: "About", path: "/#about", hash: "#about" },
  { name: "Speakers", path: "/#speakers", hash: "#speakers" },
  { name: "Sponsors", path: "/#sponsors", hash: "#sponsors" },
  { name: "Our Team", path: "/our-team", hash: "/our-team" },
];
