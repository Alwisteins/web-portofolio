import React from "react";
import Image from "next/image";
import Texture from "@/texture.webp";

export default function BlobAnimate() {
  return (
    <div className="absolute sm:top-52 sm:left-0">
      <div className="absolute z-20 w-[40rem] h-[40rem] -top-16 opacity-85 mix-blend-overlay">
        <Image src={Texture} alt="Gradient Texture" className="w-full" />
      </div>
      <div className="absolute left-14 w-52 h-52 z-10 bg-blue-500 opacity-75 rounded-full filter blur-xl animate-blob"></div>
      <div className="absolute top-4 left-32 w-80 h-80 bg-purple-400 rounded-full filter blur-xl animate-blob animation-delay-6"></div>
    </div>
  );
}