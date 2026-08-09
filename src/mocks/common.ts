export type V2NavItem = {
  id: "home" | "about" | "projects" | "resume" | "blog";
  label: string;
  href: "/" | "/about" | "/projects" | "/resume" | "/blog";
  match: "exact" | "section";
};

export const V2_NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    href: "/",
    match: "exact",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    match: "section",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    match: "section",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
    match: "section",
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    match: "section",
  },
] as const satisfies readonly V2NavItem[];

export const isV2NavItemActive = (pathname: string, item: V2NavItem) => {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
};

export const NAV_DATA = V2_NAV_ITEMS;
