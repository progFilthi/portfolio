"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Homepage() {
  const router = useRouter();
  const navToProjects = () => {
    router.push("/projects");
  };
  return (
    <section className="sm:flex items-center justify-center flex-col">
      <div>
        <Image
          src={"/portfoliodp.png"}
          alt="Portfolio Image"
          width={200}
          height={200}
          className="h-64 rounded-full object-cover w-64 mx-auto mt-10 mb-8 border bg-[#321908]"
        />
      </div>
      <div className="space-y-2">
        <div className="flex flex-col items-center justify-center space-y-2 px-4">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Developer/Software Engineer
          </h1>
          <p>
            I am a front-end developer, focused on making Responsive & elegant
            designs while turning Your ideas Into reality
          </p>
          <p className="text-[#8A7E77]">You will not be disappointed!</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={navToProjects}
            type="button"
            className="bg-[#FFCBA7] py-2 px-4 rounded-md cursor-pointer"
          >
            Projects
          </button>
        </div>
      </div>
    </section>
  );
}
