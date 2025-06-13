import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function page() {
  const technologies = [
    {
      name: "Html",
      icon: <FaHtml5 />,
    },
    {
      name: "Css",
      icon: <FaCss3 />,
    },
    {
      name: "TailwindCss",
      icon: <SiTailwindcss />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Nextjs",
      icon: <SiNextdotjs />,
    },
  ];
  return (
    <div>
      <h1 className="text-center pb-24">This is the technologies page</h1>

      <div>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          {technologies.map((tech) => (
            <div key={tech.name}>
              <div className="border bg-green-100 p-8 rounded-lg w-32 h-32 flex flex-col justify-between cursor-pointer space0-y-12">
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-bold pt-6">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
