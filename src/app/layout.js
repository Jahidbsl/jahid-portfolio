import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shered/Navbar";
import Footer from "./components/shered/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Jahid Hasan | Next.js & MERN Stack Developer",
    template: "%s | Jahid Hasan",
  },
  description: "Md. Jahid Hasan - Professional Full-Stack Developer from Barishal, Bangladesh. Expert in Next.js, React, Node.js, MongoDB & Tailwind CSS.",
  
  keywords: [
    "Jahid Hasan",
    "Md Jahid Hasan",
    "Jahid Hasan Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer Bangladesh",
    "React Developer",
    "Freelance Web Developer",
    "Barishal Web Developer",
    "Portfolio"
  ],

  authors: [{ name: "Md. Jahid Hasan" }],
  creator: "Md. Jahid Hasan",

  // Google Site Verification
  verification: {
    google: "4M-Xall_f3tTcfGz_i3lqiihhHBks8szXEuoFWA7eZA",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahid-portfolio-sandy.vercel.app",
    siteName: "Jahid Hasan Portfolio",
    title: "Jahid Hasan | Next.js & MERN Stack Developer",
    description: "Professional Full-Stack Developer from Bangladesh. Expert in Next.js, MERN Stack & Modern Web Development.",
    images: [
      {
        url: "https://i.ibb.co.com/NnLWY2jN/45b74f14-5230-469a-8bef-50c0355e8828.jpg",
        width: 1200,
        height: 630,
        alt: "Jahid Hasan - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jahid Hasan | Next.js & MERN Stack Developer",
    description: "Full-Stack Web Developer | Next.js & MERN Expert",
    images: ["https://i.ibb.co.com/NnLWY2jN/45b74f14-5230-469a-8bef-50c0355e8828.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}