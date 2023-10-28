export const API = import.meta.env.PROD ? "" : "https://localhost:3000";
console.log(API);

export const social = {
  github: "https://github.com/Fristroop",
  twitter: "https://twitter.com/Fristroop",
  instagram: "https://www.instagram.com/fristroop/",
  tiktok: "https://www.tiktok.com/@fristroop",
};

export const pages = [
  {
    icon: "fa-share-from-square",
    label: "Home",
    href: "/",
  },
  {
    icon: "fa-list-check",
    label: "Projects",
    href: "/projects",
  },
  {
    icon: "fa-hand-holding-dollar",
    label: "Pricing",
    href: "/pricing",
  },
  {
    icon: "fa-user-group",
    label: "Squad",
    href: "/squad",
  },
];

export const projects = [
  {
    banner:
      "https://storage.cloud.google.com/fristroop/resim_2023-10-22_235049761.png",
    title: "FT-Chat",
    description: "A minimized real-time chat application with rooms feature.",
    href: "https://chat.fristroop.com/",
  },
  {
    banner:
      "https://storage.cloud.google.com/fristroop/resim_2023-10-22_235345323.png",
    title: "Halo Magazine",
    description: "A magazine of english literature written by students.",
    href: "https://halo.fristroop.com/",
  },
];
