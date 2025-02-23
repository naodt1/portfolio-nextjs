"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import { SiExpress, SiFigma, SiFirebase, SiFlutter, SiGit, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

export default function Skills(){

    const skills = [
        {
            text: "Flutter",
            Icon: SiFlutter
        },
        {
            text: "Firebase",
            Icon: SiFirebase
        },
        {
            text: "React.js",
            Icon: SiReact
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "MySQL",
            Icon: SiMysql
        },
        {
            text: "NodeJs",
            Icon: SiNodedotjs
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "Figma",
            Icon: SiFigma
        },
    ];
    return <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills" isButton={false} className="flex flex-col items-center justify-center -rotate-6"/>
        <HoverEffect items={skills} />
    </div>
}