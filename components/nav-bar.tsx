"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo.jpeg"
            width={64}
            height={64}
            alt="Blue Bow Maritime Liberia Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="hidden text-2xl font-bold text-blue-900 sm:block">
            Blue Bow Maritime
          </span>
        </Link>

        {/* Hamburger Toggle (Mobile) */}
        <button
          className="text-3xl text-gray-900 focus:outline-none sm:hidden"
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
          aria-expanded={isDrawerOpen}
        >
          {isDrawerOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-900 hover:text-blue-600 px-2 py-1 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <nav className="sm:hidden">
          <ul className="absolute left-0 top-full w-full bg-white shadow-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-gray-900 hover:bg-gray-100"
                  onClick={toggleDrawer}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;