import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const navigation = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const legal = [
  { title: "Terms", href: "/terms" },
  { title: "Privacy", href: "/privacy" },
  { title: "Legal", href: "/legal" },
];

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/img/logo.jpeg"
                alt="Blue Bow Maritime Liberia Logo"
                width={96}
                height={96}
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold hidden sm:inline">
                Blue Bow Maritime
              </span>
            </Link>
            <p className="max-w-md text-gray-300">
              Blue Bow Maritime Liberia Ltd provides expert shipping, stevedoring, P&I insurance, and logistics solutions, ensuring efficiency and reliability for all your maritime needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Blue Bow Maritime Liberia. All rights reserved. Made with{" "}
          <span className="text-red-500">♥</span> by{" "}
          <a
            href="https://linkedin.com/in/musah-latif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            HHY
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}