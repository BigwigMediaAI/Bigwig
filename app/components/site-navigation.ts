export type ServiceNavLink = {
  name: string;
  href: string;
  badge: string;
  description: string;
};

export const serviceNavLinks: ServiceNavLink[] = [
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    badge: "DM",
    description: "Growth, visibility, and creative campaigns.",
  },
  {
    name: "Bigwig Technology",
    href: "/services/bigwig-technology",
    badge: "BT",
    description: "Custom software and digital products.",
  },
  {
    name: "Events",
    href: "/services/events",
    badge: "EV",
    description: "Experiences made to leave an impression.",
  },
  {
    name: "Unifyi",
    href: "/services/unifyi",
    badge: "UN",
    description: "Admission management in one platform.",
  },
  {
    name: "Critiquee",
    href: "/services/critiquee",
    badge: "CR",
    description: "Tools for a stronger online reputation.",
  },
];

export const primaryNavLinks = [
  { name: "AGENCY", href: "/agency" },
  { name: "CLIENTS", href: "/clients" },
  { name: "STRATEGY", href: "/strategy" },
  { name: "Y BIGWIG", href: "/Y-Bigwig" },
  { name: "THINGS WE DO", href: "/things-we-do" },
  { name: "METHOD TO MADNESS", href: "/method" },
];
