import React from "react";

interface FooterProps {
  onPrivacyClick: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} MS Review. All rights reserved.</p>
        <nav className="space-x-4 mt-2 md:mt-0">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <button
            onClick={onPrivacyClick}
            className="hover:underline bg-transparent border-0 p-0 cursor-pointer"
          >
            Privacy Policy
          </button>
        </nav>
      </div>
    </footer>
  );
}
