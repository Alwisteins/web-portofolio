"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AlwiMainPicture from "@/alwi-django.jpeg";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Texture from "@/texture.webp";

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
        <div className="absolute top-8 left-14 w-32 h-32 sm:w-52 sm:h-52 z-10 bg-blue-500 opacity-60 rounded-full filter blur-2xl animate-blob"></div>
        <div className="absolute top-20 left-28 sm:left-32 w-52 h-52 sm:w-72 sm:h-72 bg-purple-400 opacity-70 rounded-full filter blur-2xl animate-blob animation-delay-6"></div>
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-start sm:w-[35rem] my-5 mx-10 sm:m-0 space-y-4 z-30">
        <h1 className="text-4xl sm:text-7xl font-bold">
          Hi<span className="animate-wave inline-block p-1">👋</span>, im Alwi
          Wahyu Waludin.
        </h1>

        <p className="text-base sm:text-lg text-slate-600">
          A{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Fullstack Web Developer
          </span>{" "}
          based in Pemalang, Indonesia.
        </p>

        <div className="flex items-center space-x-3">
          <Link
            href="./cv-developer-alwi-wahyu-waludin.pdf"
            target="_blank"
            ref={ref}
            className="flex px-4 py-2 text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          >
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
