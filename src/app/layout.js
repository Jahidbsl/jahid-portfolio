import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shered/Navbar";
import Footer from "./components/shered/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  description:
    "Md. Jahid Hasan - Professional Full-Stack Developer from Barishal, Bangladesh. Expert in Next.js, React, Node.js, MongoDB & Tailwind CSS.",

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
  ],

  authors: [{ name: "Md. Jahid Hasan" }],
  creator: "Md. Jahid Hasan",

  // Google Verification
  verification: {
    google: "4M-Xall_f3tTcfGz_i3lqiihhHBks8szXEuoFWA7eZA",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahid-portfolio-sandy.vercel.app",
    siteName: "Jahid Hasan Portfolio",
    title: "Jahid Hasan | Next.js & MERN Stack Developer",
    description: "Professional Full-Stack Developer from Bangladesh.",
    images: [
      {
      
        url: "https://i.ibb.co.com/NnLWY2jN/45b74f14-5230-469a-8bef-50c0355e8828.jpg", 
        width: 1200,
        height: 630,
        alt: "Jahid Hasan - Full Stack Developer",
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
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md. Jahid Hasan",
    "jobTitle": "Next.js & MERN Stack Specialist",
    "url": "https://jahid-portfolio-sandy.vercel.app",
    "image": "https://i.ibb.co.com/NnLWY2jN/45b74f14-5230-469a-8bef-50c0355e8828.jpg",
    "sameAs": [
      "https://github.com/Jahidbsl", 
      "https://www.linkedin.com/in/jahidhasan-webdev", 
    ]
  };
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}