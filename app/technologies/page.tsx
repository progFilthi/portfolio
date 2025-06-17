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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center pb-4 text-4xl font-semibold">Technologies</h1>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pt-4">
          {technologies.map((tech) => (
            <div key={tech.name}>
              <div className="flex items-center justify-center flex-col shadow-sm bg-[#FFCBA7] p-4 rounded-lg w-32 h-32 cursor-pointer">
                <span className="text-3xl bg-white rounded-full p-3 mt-2 shadow-md">
                  {tech.icon}
                </span>
                <span className="font-bold pt-8">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
