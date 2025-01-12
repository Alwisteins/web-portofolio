"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AlwiMainPicture from "@/assets/alwi-django.jpeg";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Texture from "@/assets/texture.webp";

export default function Home() {
  const ref = useRef("noopener noreferrer");
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-start py-10 sm:justify-center space-y-8 sm:space-x-12 sm:space-x-reverse w-screen h-[90vh]">
      <div className="flex w-72 h-72 sm:w-[22rem] sm:h-[22rem]">
        <Image
          src={AlwiMainPicture}
          alt="Alwi Main Image"
          quality={100}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto" }}
          className="border-solid border-black border-4 rounded-full"
        />
      </div>

      <div className="absolute sm:top-40 left-0 sm:left-60 top-80">
        <div className="absolute left-0 sm:-top-16 z-20 w-96 h-96 sm:w-[40rem] sm:h-[40rem] opacity-80 mix-blend-overlay">
          <Image src={Texture} alt="Gradient Texture" className="w-full" />
        </div>
        <div className="absolute top-6 sm:top-3 left-14 sm:left-10 w-32 h-32 sm:w-52 sm:h-52 z-10 bg-amber-700 opacity-60 rounded-full filter blur-2xl animate-topLeft"></div>
        <div className="absolute top-20 sm:top-16 left-28 sm:left-28 w-52 h-52 sm:w-72 sm:h-72 bg-yellow-400 opacity-70 rounded-full filter blur-2xl animate-topRight animation-delay-6"></div>
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-start sm:w-[35rem] my-5 mx-10 sm:m-0 space-y-4 z-30">
        <h1 className="text-4xl sm:text-7xl font-bold">
          Hi<span className="animate-wave inline-block p-1">👋</span>, im Alwi Wahyu Waludin.
        </h1>

        <p className="text-base sm:text-lg text-slate-600">
          <span className="bg-yellow-300 text-white p-1">
            Frontend Web Developer & UI/UX Designer
          </span>{" "}
          based in Tangerang Selatan, Indonesia.
        </p>

        <div className="flex items-center space-x-3">
          <Link
            href="./cv-6m-alwi-wahyu-waludin.pdf"
            target="_blank"
            className="flex px-4 py-2 text-white rounded-md bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-blue-300">
            <HiDocumentDownload className="mr-1 h-5 w-5" />
            Download CV
          </Link>
          <a href="https://github.com/Alwisteins">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/alwi-wahyu-8bb256288/">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
