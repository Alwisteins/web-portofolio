import Image from "next/image";
import AlwiProfilePicture from "../../../public/alwi-django.jpeg";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-evenly py-5 w-screen h-[90vh] bg-[#f9f9f9]">
      <div className="flex sm:w-[22rem] sm:h-[22rem]">
        <Image
          src={AlwiProfilePicture}
          alt="Alwi Main Image"
          quality={100}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto" }}
          className="border-solid border-black border-4 rounded-full"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start sm:w-[35rem] space-y-2">
        <h1 className="text-2xl sm:text-7xl font-bold">
          Hi<span className="animate-wave inline-block p-1">👋</span>, im Alwi
          Wahyu Waludin.
        </h1>

        <p className="text-xs sm:text-lg text-slate-600">
          A Fullstack Web Developer based in Pemalang, Indonesia.
        </p>

        <div className="flex items-center space-x-3">
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
    </div>
  );
}
