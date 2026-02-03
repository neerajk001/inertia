import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inertiastudio.com'), // Replace with your actual domain
  title: {
    default: "Inertia Studio | High-Converting Websites & Apps",
    template: "%s | Inertia Studio",
  },
  description: "We help small businesses grow with modern, high-performance websites and scalable web apps. No agency overhead, just results.",
  keywords: [
    "Web Design",
    "Web Development",
    "Small Business Website",
    "App Development",
    "Next.js Agency",
    "React Developer",
    "Freelance Web Designer",
    "Inertia Studio",
  ],
  authors: [{ name: "Inertia Studio" }],
  creator: "Inertia Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inertiastudio.com",
    title: "Inertia Studio | Websites & Web Apps",
    description: "We help small businesses grow with modern, high-performance websites and scalable web apps.",
    siteName: "Inertia Studio",
    images: [
      {
        url: "/og-image.jpg", // Add an 'og-image.jpg' to your public folder for best results
        width: 1200,
        height: 630,
        alt: "Inertia Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inertia Studio | Websites & Web Apps",
    description: "High-converting websites and scalable web apps for small businesses.",
    // images: ["/twitter-image.jpg"], // Add a twitter image if you have one
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
