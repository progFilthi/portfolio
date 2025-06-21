import Navbar from "@/app/Navbar/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-[#FFF7F2] h-full text-[#321908] ">
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center pt-24">{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}
