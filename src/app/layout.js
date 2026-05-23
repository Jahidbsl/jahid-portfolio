import { Geist, Geist_Mono, Outfit, Playfair_Display, Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shered/Navbar";
import Footer from "./components/shered/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["900"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export const metadata = {
  title: {
    default: "Jahid Hasan | Next.js & MERN Stack Developer",
    template: "%s | Jahid Hasan",
  },
  description: "Portfolio of Md. Jahid Hasan, a Full-Stack Developer specializing in Next.js, Tailwind CSS, and the MERN stack. Building high-performance, scalable, and secure web applications.",
  keywords: [
    "Md. Jahid Hasan",
    "Jahid Hasan",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "React Developer",
    "JavaScript Engineer",
    "Web Application Developer"
  ],
  authors: [{ name: "Md. Jahid Hasan" }],
  creator: "Md. Jahid Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // ⚠️ Apnar domain link-ti ekhane boshaben
    title: "Jahid Hasan | Next.js & MERN Stack Developer",
    description: "Explore the portfolio of Md. Jahid Hasan, a Full-Stack Web Developer building modern, high-performance web applications using MERN and Next.js.",
    siteName: "Jahid Hasan Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg", // ⚠️ Apnar ekti image-er absolute path (e.g., public folder-e thaka)
        width: 1200,
        height: 630,
        alt: "Jahid Hasan Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahid Hasan | Next.js & MERN Stack Developer",
    description: "Full-Stack Web Developer specializing in Next.js, React, and Node.js.",
    images: ["https://yourportfolio.com/og-image.jpg"], // ⚠️ Same og-image url
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
         className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${outfit.variable}
        ${playfairDisplay.variable}
        ${cormorantGaramond.variable}
        ${dmMono.variable}
        ${dmSans.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-outfit)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
