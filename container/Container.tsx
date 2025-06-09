import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center mt-24">{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}
