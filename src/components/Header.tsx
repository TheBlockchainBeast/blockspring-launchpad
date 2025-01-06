"use client";

import React, { useState, useEffect } from "react";
import { SiSpring } from "react-icons/si";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`dark:bg-[#0A0A0A] bg-white transition-all duration-200 
      ${
        isScrolled
          ? "shadow border-b dark:border-[#1C1C1C] border-gray-200"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2 dark:text-white text-gray-900">
          <SiSpring className="text-blue-500" />
          BlockSpring
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden dark:text-white text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="/dashboard"
            className="dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Dashboard
          </a>
          <a
            href="/projects"
            className="dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Projects
          </a>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-3 sm:px-6 py-2 sm:py-3 dark:bg-[#0A0A0A] bg-white rounded-full leading-none dark:text-white text-gray-900 text-sm sm:text-base">
              Connect Wallet
            </div>
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 dark:bg-[#0A0A0A] bg-white border-b dark:border-[#1C1C1C] border-gray-200 md:hidden p-4 flex flex-col gap-4 z-50">
            <a
              href="/dashboard"
              className="dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors flex items-center justify-between"
            >
              Dashboard
            </a>
            <a
              href="/projects"
              className="dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors flex items-center justify-between"
            >
              Projects
            </a>
            <button className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative px-6 py-3 dark:bg-[#0A0A0A] bg-white rounded-lg leading-none dark:text-white text-gray-900 w-full">
                Connect Wallet
              </div>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
