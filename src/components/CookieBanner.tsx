"use client";

import React, { useState, useEffect } from "react";

interface CookieBannerProps {
  onPrivacyClick: () => void;
}

export default function CookieBanner({ onPrivacyClick }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded shadow-lg flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience. By using our site, you agree to our{" "}
        <button 
          onClick={onPrivacyClick} 
          className="underline cursor-pointer bg-transparent border-0 p-0 text-white hover:text-gray-300"
        >
          Privacy Policy
        </button>
        .
      </p>
      <button
        onClick={acceptCookies}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Accept
      </button>
    </div>
  );
}
