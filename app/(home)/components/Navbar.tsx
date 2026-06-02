import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/naod-tadel/",
      label: "Linkedin",
      Icon: BsLinkedin,
    },
    {
      link: "https://github.com/naodt1",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <Link href="/">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
          Naod Tadele 🧑🏻‍💻
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-green-500 transition-colors font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
