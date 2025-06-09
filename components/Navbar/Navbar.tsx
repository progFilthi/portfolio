import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto z-50">
      <ul className="flex items-center justify-between space-x-4 px-40 py-4 shadow rounded-b-lg">
        <Link href={"/"}>
          <li>Portfolio</li>
        </Link>

        <li className="flex space-x-4">
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/technologies"}>Technologies</Link>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
