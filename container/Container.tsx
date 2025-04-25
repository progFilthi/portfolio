import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ChildrenProps) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center min-h-screen">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
