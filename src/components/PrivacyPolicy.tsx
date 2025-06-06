"use client";

import React from "react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60">
      <div className="bg-white text-black max-w-3xl w-full p-6 rounded shadow-lg relative max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
        <div className="prose max-w-none mb-6">
          <h3>1. Information Collection and Use</h3>
          <p>
            We are committed to protecting your privacy and maintaining the security of any personal information received from you. We collect information that you provide directly to us, including when you open an account, make a transaction, or communicate with us.
          </p>

          <h3>2. Types of Information We Collect</h3>
          <ul>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Banking and financial information</li>
            <li>Transaction history and account information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, including:
          </p>
          <ul>
            <li>Processing your transactions and maintaining your accounts</li>
            <li>Communicating with you about your account and our services</li>
            <li>Protecting against fraud and maintaining security</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h3>4. Information Security</h3>
          <p>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3>5. Cookies and Tracking</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h3>7. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@midflorida.com.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-600 font-bold text-lg"
          aria-label="Close Privacy Policy"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
