"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function Page() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handlePrivacyOpen = () => setShowPrivacy(true);
  const handlePrivacyClose = () => setShowPrivacy(false);

  return (
    <>
      <Header />
      <div className="bg-gray-100 py-2 px-6 text-sm text-gray-700 font-semibold">
        You are in: <span className="text-black">Mid Florida Bank</span>
      </div>
      <main className="min-h-screen bg-white text-black font-sans px-6 py-12 max-w-5xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <section id="intro" className="mb-12">
            <h1 className="text-3xl font-semibold mb-4">A Mysterious Stranger&apos;s Review</h1>
            <p>
              I am a mysterious stranger here to take you on a journey through Mid Florida Bank. Together, we will uncover the unique advantages this bank offers and why it deserves to be your primary choice. Join me as we explore what makes Mid Florida Bank stand out in the crowded world of finance.
            </p>
          </section>
          <section id="about">
            <h1>Mid Florida Bank: A Trusted Community Bank with a Rich History</h1>
            <p>
              Mid Florida Bank is a well-established community bank serving Central Florida with a strong commitment to personalized service and local decision-making. Founded in 1999, the bank has grown steadily by focusing on the financial needs of individuals, families, and businesses in the region.
            </p>
            <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6">
              MidFlorida Credit Union (stylized as MIDFLORIDA) is a credit union based in Lakeland, Florida. MidFlorida has 58 locations throughout the state of Florida, 421,180 members and $6.05 billion in assets as of December 31, 2021, making MidFlorida the fourth-largest credit union in the state of Florida. MidFlorida Credit Union is regulated by the National Credit Union Administration (NCUA) as a federally insured state-chartered credit union. MidFlorida was officially chartered in 1935 and was assigned NCUA charter number 68600.
            </blockquote>
            <a
              href="https://en.wikipedia.org/wiki/MidFlorida_Credit_Union"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 text-blue-600 hover:underline"
            >
              Read more on Wikipedia
            </a>
            <p>
              <strong>Contact Information:</strong><br />
              Address: 100 Cypress Gardens Blvd, Winter Haven, FL 33880<br />
              Phone: (863) 294-5000<br />
              {"Email: "}info@midflorida.com
            </p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MIDFL_FCCU_Inset_Logo_2020_rgb.png/250px-MIDFL_FCCU_Inset_Logo_2020_rgb.png"
              alt="Mid Florida Bank Building"
              width={250}
              height={150}
              className="rounded-lg my-6"
            />
          </section>
          <section id="advantages">
            <h2>Company History and Background</h2>
            <p>
              Mid Florida Bank was established to provide a community-focused alternative to larger national banks. With headquarters in Winter Haven, Florida, the bank has expanded its footprint across Central Florida, offering a wide range of banking products and services. The bank prides itself on its local leadership and decision-making, ensuring customers receive timely and personalized attention.
            </p>
            <h2>Comprehensive Banking Services</h2>
            <p>
              Mid Florida Bank offers a full suite of financial products including personal checking and savings accounts, business banking solutions, commercial loans, mortgage lending, and online banking services. Their digital platforms provide secure and convenient access to accounts, making banking easy for customers on the go.
            </p>
            <h2>Why Choose Mid Florida Bank?</h2>
            <ul>
              <li><strong>Community Focus:</strong> Deeply rooted in Central Florida, Mid Florida Bank prioritizes building strong relationships with customers and supporting local communities.</li>
              <li><strong>Local Decision Making:</strong> Loan and credit decisions are made locally, allowing for faster responses and a better understanding of customer needs.</li>
              <li><strong>Personalized Service:</strong> Customers benefit from dedicated bankers who provide tailored financial advice and solutions.</li>
              <li><strong>Financial Strength:</strong> The bank maintains strong financial health and regulatory compliance, ensuring security and trust.</li>
              <li><strong>Convenient Digital Banking:</strong> Robust online and mobile banking platforms offer 24/7 access to accounts and services.</li>
            </ul>
          </section>
          <section id="comparison" className="my-12">
            <h2>Bank Comparison</h2>
            <p>See how Mid Florida Bank compares to other banks in the region:</p>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-4 py-2">Bank</th>
                    <th className="px-4 py-2">Customer Satisfaction</th>
                    <th className="px-4 py-2">Interest Rates</th>
                    <th className="px-4 py-2">Fees</th>
                    <th className="px-4 py-2">Local Decision Making</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-100 font-bold">
                    <td className="border px-4 py-2">Mid Florida Bank</td>
                    <td className="border px-4 py-2">95%</td>
                    <td className="border px-4 py-2">Competitive</td>
                    <td className="border px-4 py-2">Low</td>
                    <td className="border px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Bank of America</td>
                    <td className="border px-4 py-2">80%</td>
                    <td className="border px-4 py-2">Average</td>
                    <td className="border px-4 py-2">High</td>
                    <td className="border px-4 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Wells Fargo</td>
                    <td className="border px-4 py-2">78%</td>
                    <td className="border px-4 py-2">Average</td>
                    <td className="border px-4 py-2">Medium</td>
                    <td className="border px-4 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Chase</td>
                    <td className="border px-4 py-2">82%</td>
                    <td className="border px-4 py-2">Average</td>
                    <td className="border px-4 py-2">Medium</td>
                    <td className="border px-4 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="contact" className="text-center">
            <h2>Get Started with Mid Florida Bank</h2>
            <p>
              Whether you are looking for personal banking solutions or business financial services, Mid Florida Bank offers the expertise and commitment to help you succeed. Visit their website or contact a local branch today to learn more.
            </p>
            <a
              href="https://www.midflorida.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Visit Mid Florida Bank
            </a>
          </section>
        </article>
      </main>
      <Footer onPrivacyClick={handlePrivacyOpen} />
      <CookieBanner onPrivacyClick={handlePrivacyOpen} />
      <PrivacyPolicy isOpen={showPrivacy} onClose={handlePrivacyClose} />
    </>
  );
}
