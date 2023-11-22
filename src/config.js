export const API = import.meta.env.PROD ? "" : "https://localhost:3000";
console.log(API);

export const socials = [
  {
    icon: "fa-brands fa-github",
    label: "Github",
    href: "https://github.com/Fristroop",
  },
  {
    icon: "fa-brands fa-discord",
    label: "Discord",
    href: "https://discord.com/invite/c4hrGHwSgS",
  },
  {
    icon: "fa-brands fa-x-twitter",
    label: "x",
    href: "https://x.com/Fristroop",
  },
  {
    icon: "fa-brands fa-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/fristroop/",
  },
  {
    icon: "fa-brands fa-tiktok",
    label: "Tiktok",
    href: "https://www.tiktok.com/@fristroop",
  },
];

export const pages = [
  {
    icon: "fa-share-from-square",
    label: "Home",
    href: "/",
  },
  {
    icon: "fa-list-check",
    label: "Projects",
    href: "https://github.com/Fristroop",
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
