"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="container flex justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <Link href={"/"} className="flex items-center text-2xl font-bold">
            <div className="w-16 mr-3">
              {" "}
              <Image
                src="/img/logo.jpeg"
                width={150}
                height={150}
                alt="Blue Bow Maritime Agency Logo"
                className="w-16 h-auto"
              />
            </div>
            <span className="hidden sm:block text-blue-900">Blue Bow Maritime Agency</span>{" "}
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <a className="px-4" href="/about-us">
            About Us
          </a>
          <a className="px-4" href="/services">
            Services
          </a>
          <a className="px-4" href="/contact">
            Contact
          </a>
        </div>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col items-start px-8 py-4">
            <a className="py-2 w-full" href="/about-us" onClick={toggleDrawer}>
              About Us
            </a>
            <a className="py-2 w-full" href="/services" onClick={toggleDrawer}>
              Services
            </a>
            <a className="py-2 w-full" href="/contact" onClick={toggleDrawer}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
