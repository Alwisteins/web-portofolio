import React from "react";
import Image from "next/image";
import Texture from "@/texture.webp";

export default function BlobAnimate() {
  return (
    <div className="absolute sm:top-40 sm:left-0">
    <div className="absolute z-20 w-[40rem] h-[40rem] sm:-top-16 opacity-60 mix-blend-overlay">
      <Image src={Texture} alt="Gradient Texture" className="w-full" />
    </div>
    <div className="absolute sm:left-14 w-52 h-52 z-10 bg-blue-500 opacity-60 rounded-full filter blur-2xl animate-blob"></div>
    <div className="absolute sm:top-4 sm:left-32 w-72 h-72 bg-purple-400 opacity-75 rounded-full filter blur-2xl animate-blob animation-delay-6"></div>
  </div>
  );
}