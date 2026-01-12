import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alwi Wahyu Waludin - Fullstack Web Developer",
  description: "A Fullstack Web Developer based in Pemalang, Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className}`}>
        <div className="overflow-x-hidden bg-[#FFEFDF]">
          <Navbar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
