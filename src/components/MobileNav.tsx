"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // Using lucide-react for icons

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(true)} className="absolute top-4 left-4 text-primary">
        <Menu size={32} />
      </button>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background text-primary flex flex-col items-center justify-center">
          {/* Close Icon */}
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <ul className="space-y-6 text-xl font-bold">
            <li><Link href="#hero" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#lineup" onClick={() => setIsOpen(false)}>Lineup</Link></li>
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#location" onClick={() => setIsOpen(false)}>Location</Link></li>
            <li><Link href="#schedule" onClick={() => setIsOpen(false)}>Schedule</Link></li>
            <li><Link href="#rules" onClick={() => setIsOpen(false)}>Rules</Link></li>
            <li><Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link href="#get-involved" onClick={() => setIsOpen(false)}>Get Involved</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
