import React from "react";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MS Review</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#advantages" className="hover:underline">
              Advantages
            </a>
          </li>
          <li>
            <a href="#comparison" className="hover:underline">
              Comparison
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
