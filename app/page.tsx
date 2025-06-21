import Homepage from "@/app/home/Home";
import React from "react";
import ProjectsPage from "./projects/page";
import TechnologiesPage from "./technologies/page";
import AboutPage from "./about-me/page";

export default function page() {
  return (
    <div>
      <Homepage />
      <ProjectsPage />
      <TechnologiesPage />
      <AboutPage />
    </div>
  );
}
