import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jeanmax1me-dev.vercel.app"),
  title: "jeanmax1me Portfolio",
  description: "Developer Portfolio By Jean-Maxime Gilbert",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portfolio",
    "Jean-Maxime Gilbert",
    "jeanmax1me",
  ],
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
        className={`${inter.className} overflow-x-hidden overflow-y-scroll bg-[#111]`}
      >
        {children}
      </body>
    </html>
  );
}
