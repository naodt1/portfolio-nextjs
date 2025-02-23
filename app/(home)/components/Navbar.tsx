import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";


export default function Navbar({className}: {className?:string}){
    const socials = [
        {
            link: "https://www.linkedin.com/in/naod-tadele-063b23119/",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/kronahs",
            label: "GitHub",
            Icon: SiGithub ,
        },
        {
            link: "https://twitter.com/naod_tadele1",
            label: "X",
            Icon: SiX,
        }
    ];


    return <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Naod Tadele 🧑🏻‍💻</h1>
        <div className="flex items-center gap-5"> 
            {socials.map((social,index) => {
                const Icon = social.Icon;

                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                </Link>
            })}
        </div>
    </nav>
}