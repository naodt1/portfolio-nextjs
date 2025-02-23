import {
  SiFirebase,
  SiFlutter,
  SiMapbox,
  SiMaterialdesign,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Debbol Food Delivery",
      tech: [SiFlutter, SiMaterialdesign],
      cover: "/debbol.png",
      link: "https://www.debbol.com/en",
      description:
        "Debbol is a food delivery app that enables users to order food from restaurants near them with multiple delivery options.",
      icons: [
        <SiFlutter key="flutter" />,
        <SiMaterialdesign key="material" />,
        <SiNodedotjs key="nodejs" />,
        <SiMapbox key="mapbox" />,
      ],
       
    },
    {
      title: "Heelies Shoe Ecom",
      tech: [SiFlutter, SiNodedotjs, SiMongodb],
      cover: "/heelies-app.jpg",
      link: "https://github.com/kronahs/cookboard_app", //TODO:ADD HELIES LINK,
      description:
        "Heelies Shoe Ecom is an online shoe store that offers a wide range of footwear for men, women, and children.",
      icons: [
        <SiFlutter key="flutter" />,
        <SiNodedotjs key="nodejs" />,
        <SiMongodb key="mongodb" />,
      ],
    },
    {
      title: "Keepr Password Manager",
      tech: [SiFlutter, SiFirebase],
      cover: "/keepr-pass.jpg",
      link: "https://github.com/kronahs/keepr-password-manager",
      description:
        "Keepr is a robust password manager designed to safeguard your digital security with advanced encryption and multi-factor authentication.",
      icons: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    },
    {
      title: "Convo Chat-App",
      tech: [SiFlutter, SiFirebase],
      cover: "/convo-chat.jpg",
      link: "https://github.com/kronahs/convo-messaging-app",
      description:
        "Convo is a messaging application inspired by the functionality of platforms like Telegram. It serves as a reliable communication tool, facilitating seamless connections between users across the globe.",
      icons: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    },
    {
      title: "FixMasters",
      tech: [SiFlutter, SiFirebase],
      cover: "/fixmasters.png",
      link: "https://github.com/kronahs/fixmasters_user_app",
      description:
        "FixMasters connects users with the nearest handyman based on the service they provide. Users can communicate with handyman through its chat feature. Handyman can check their bookings and manage their services called gigs.",
      icons: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        isButton={false}
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="rounded-md cursor-pointer transition-transform transform hover:scale-105 bg-gray-900 text-white overflow-hidden">
              <Image
                src={project.cover}
                alt={project.title}
                
                width={700}
                height={675}
                className="mb-4"
                
                
              />
              {/* <p className="text-gray-300 italic ml-4 mr-4 ">Jun 2024 - July 2024</p> */}
              <div className="p-5 pt-2">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-row items-center mt-4">
                  {project.icons.map((icon, iconIndex) => (
                    <span key={iconIndex} className="w-6 h-6 mx-2">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:h-40 sm:h-48"></div>
    </div>
  );
}
