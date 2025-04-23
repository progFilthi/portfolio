import React from "react";
import Link from "next/link";

const Links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Technologies",
    href: "/technologies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "About Me",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 items-center justify-center py-4 shadow-lg">
        {Links.map((link) => (
          <Link key={link.href} href={link.href}>
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
