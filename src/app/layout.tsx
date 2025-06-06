import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mid Florida Bank',
  description: 'Landing page for Mid Florida Bank showcasing company and advantages',
  icons: {
    icon: '/favicon.ico',
  },
  // Add Google Fonts link in metadata for Next.js 13
  // This is a workaround since Next.js 13 does not support link tags in layout head
  // Users can add fonts in globals.css or use next/font for better optimization
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
