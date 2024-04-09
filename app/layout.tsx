import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://jeanmax1me-dev.vercel.app"
  ),
  title: "jeanmax1me Portfolio",
  description: "Developer Portfolio By Jean-Maxime Gilbert",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "Jean-Maxime Gilbert", "jeanmax1me"],
  openGraph: {
    title: "Jean-Maxime Gilbert",
    description: "Software Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
