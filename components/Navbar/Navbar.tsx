"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto z-50 shadow rounded-b-lg">
      <div className="flex items-center justify-between mx-10 px-4 py-4">
        <Link href="/">
          <span className="font-bold text-lg cursor-pointer">Portfolio</span>
        </Link>

        {/* Mobile toggle */}
        <div className="sm:hidden">
          {isMenuOpen ? (
            <FaX className="cursor-pointer" onClick={handleMenuClick} />
          ) : (
            <FaBars className="cursor-pointer" onClick={handleMenuClick} />
          )}
        </div>

        {/* Desktop nav items */}
        <ul className="hidden sm:flex items-center space-x-6 text-sm font-semibold">
          <Link href="/projects">
            <li>Projects</li>
          </Link>
          <Link href="/technologies">
            <li>Technologies</li>
          </Link>
          <Link href="/about-me">
            <li>About me</li>
          </Link>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center bg-[#FFF7F2] text-[#321908] space-y-4 py-4 text-sm font-semibold sm:hidden">
          <Link href="/projects">
            <li>Projects</li>
          </Link>
          <Link href="/technologies">
            <li>Technologies</li>
          </Link>
          <Link href="/about-me">
            <li>About me</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
