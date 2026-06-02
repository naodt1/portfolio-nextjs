export type TechId =
  | "flutter"
  | "firebase"
  | "react"
  | "nodejs"
  | "mongodb"
  | "mapbox"
  | "material"
  | "nextjs"
  | "express"
  | "mysql"
  | "figma"
  | "typescript"
  | "supabase"
  | "tailwind"
  | "dart"
  | "python";

export interface Project {
  id: string;
  title: string;
  description: string;
  cover: string;
  link: string;
  tech: TechId[];
}

export const projects: Project[] = [
  {
    id: "intraverse-africa",
    title: "Intraverse Africa",
    description:
      "Intraverse Africa is a travel-as-a-Service platform with a modern infrastructure designed to deliver unparalleled travel experiences, simplify travel management, and accelerate innovation in the travel industry.",
    cover: "/intraverse-africa.jpg",
    link: "https://intraverse.africa",
    tech: ["react", "nodejs"],
  },
  {
    id: "debbol",
    title: "Debbol Food Delivery",
    description:
      "Debbol is a food delivery app that enables users to order food from restaurants near them with multiple delivery options.",
    cover: "/debbol.png",
    link: "https://www.debbol.com/en",
    tech: ["flutter", "material", "nodejs", "mapbox"],
  },
  {
    id: "heelies",
    title: "Heelies Shoe Ecom",
    description:
      "Heelies Shoe Ecom is an online shoe store that offers a wide range of footwear for men, women, and children.",
    cover: "/heelies-app.jpg",
    link: "https://github.com/kronahs/cookboard_app",
    tech: ["flutter", "nodejs", "mongodb"],
  },
  {
    id: "keepr",
    title: "Keepr Password Manager",
    description:
      "Keepr is a robust password manager designed to safeguard your digital security with advanced encryption and multi-factor authentication.",
    cover: "/keepr-pass.jpg",
    link: "https://github.com/naodt1/keepr-password-manager",
    tech: ["flutter", "firebase"],
  },
  {
    id: "convo",
    title: "Convo Chat-App",
    description:
      "Convo is a messaging application inspired by the functionality of platforms like Telegram. It serves as a reliable communication tool, facilitating seamless connections between users across the globe.",
    cover: "/convo-chat.jpg",
    link: "https://github.com/naodt1/convo-app",
    tech: ["flutter", "firebase"],
  },
  {
    id: "fixmasters",
    title: "FixMasters",
    description:
      "FixMasters connects users with the nearest handyman based on the service they provide. Users can communicate with handyman through its chat feature. Handyman can check their bookings and manage their services called gigs.",
    cover: "/fixmasters.png",
    link: "https://github.com/naodt1/fixmasters-user-app",
    tech: ["flutter", "firebase"],
  },
];
