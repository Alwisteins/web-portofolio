import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alwi Wahyu Waludin - Fullstack Web Developer",
  description: "A Fullstack Web Developer based in Pemalang, Indonesia.",
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
