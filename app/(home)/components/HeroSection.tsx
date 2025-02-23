import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-center animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">{"I'm Naod."}</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {"I'm a flutter mobile app developer passionate to create useful and creative apps that users love"}
        </p>
        <Link href={"mailto:business@naodtadele.com"} className="inline-block group">
          <Title text="Contact Me 📭" isButton={true} />
        </Link>
      </div>
      <div className="relative  lg:block">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <Link href='https://flowcv.com/resume/e72pwgwqs3' target="_blank">
            <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold hidden lg:block">
              <p>🧰 My Resume</p>
            </MovingBorderBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
