import Image from "next/image";
import AlwiProfilePicture from "../../../public/alwi-django.jpeg";
import BlobAnimate from "@/animate/BlobAnimate";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center h-[90vh] w-screen bg-[#f9f9f9]">
      <BlobAnimate />
      <div className="space-y-4 w-5/12 z-10">
        <h1 className="text-xl sm:text-7xl text-prim-black font-bold">
          Hi<span className="animate-wave inline-block p-1">👋</span>, im Alwi
          Wahyu Waludin.
        </h1>
        <p className="text-xs sm:text-lg pl-2 text-slate-600">
          A Fullstack Web Developer based in Pemalang, Indonesia.
        </p>
        <div className="ml-2 flex items-center space-x-3">
          <Button color="blue">
            <HiDocumentDownload className="mr-1 h-5 w-5" />
            Download CV
          </Button>
          <a href="https://github.com/Alwisteins">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/alwi-wahyu-8bb256288/">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
      <Image
        src={AlwiProfilePicture}
        alt="Alwi Main Image"
        className="border-solid border-black border-4 rounded-full"
        width={350}
        height={350}
        quality={100}
        priority
      />
    </div>
  );
}
