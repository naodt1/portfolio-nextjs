import { IconType } from "react-icons";
import {
  SiFirebase,
  SiFlutter,
  SiMapbox,
  SiMaterialdesign,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiFigma,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
  SiDart,
  SiPython,
} from "react-icons/si";
import { TechId } from "./projects";

export interface TechOption {
  id: TechId;
  label: string;
  Icon: IconType;
}

export const TECH_OPTIONS: TechOption[] = [
  { id: "flutter", label: "Flutter", Icon: SiFlutter },
  { id: "firebase", label: "Firebase", Icon: SiFirebase },
  { id: "react", label: "React", Icon: SiReact },
  { id: "nodejs", label: "Node.js", Icon: SiNodedotjs },
  { id: "mongodb", label: "MongoDB", Icon: SiMongodb },
  { id: "mapbox", label: "Mapbox", Icon: SiMapbox },
  { id: "material", label: "Material Design", Icon: SiMaterialdesign },
  { id: "nextjs", label: "Next.js", Icon: SiNextdotjs },
  { id: "express", label: "Express", Icon: SiExpress },
  { id: "mysql", label: "MySQL", Icon: SiMysql },
  { id: "figma", label: "Figma", Icon: SiFigma },
  { id: "typescript", label: "TypeScript", Icon: SiTypescript },
  { id: "supabase", label: "Supabase", Icon: SiSupabase },
  { id: "tailwind", label: "Tailwind CSS", Icon: SiTailwindcss },
  { id: "dart", label: "Dart", Icon: SiDart },
  { id: "python", label: "Python", Icon: SiPython },
];

export const TECH_MAP = Object.fromEntries(
  TECH_OPTIONS.map((t) => [t.id, t])
) as Record<TechId, TechOption>;
