"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Indana Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="/produk"
            className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
          >
            Produk
          </Link>
          <Link
            href="/tentang-kami"
            className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/kontak"
            className="text-gray-800 hover:text-yellow-600 font-medium transition-colors"
          >
            Kontak
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-yellow-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-800 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/produk"
              className="block text-gray-800 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/tentang-kami"
              className="block text-gray-800 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/kontak"
              className="block text-gray-800 hover:text-yellow-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
