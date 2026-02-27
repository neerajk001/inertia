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
    default: "vectorIO | High-Converting Websites & Apps",
    template: "%s | vectorIO",
  },
  description: "We help founders and growing teams build websites and applications that turn traffic into revenue.",
  keywords: [
    "Web Design",
    "Web Development",
    "Small Business Website",
    "App Development",
    "Next.js Agency",
    "React Developer",
    "Freelance Web Designer",
    "vectorIO",
  ],
  authors: [{ name: "vectorIO" }],
  creator: "vectorIO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inertiastudio.com",
    title: "vectorIO | Websites & Web Apps",
    description: "We help founders and growing teams build websites and applications that turn traffic into revenue.",
    siteName: "vectorIO",
    images: [
      {
        url: "/og-image.jpg", // Add an 'og-image.jpg' to your public folder for best results
        width: 1200,
        height: 630,
        alt: "vectorIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vectorIO | Websites & Web Apps",
    description: "We help founders and growing teams build websites and applications that turn traffic into revenue.",
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
