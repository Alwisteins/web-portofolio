import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alwi Wahyu Waludin - Fullstack Web Developer",
  description: "This is my personal portfolio web pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="overflow-x-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
