import Image from "next/image";
import AlwiProfilePict from "@/alwi-django.jpeg";

export default function About() {
  return (
    <div className="flex justify-center p-5 space-x-10">
      <Image
        src={AlwiProfilePict}
        alt="Alwi Main Image"
        quality={100}
        priority
        width={400}
        height={350}
        className="rounded-xl border-2 border-black"
      />

      <div className="w-2/4">
        <h1 className="font-bold sm:text-3xl text-lg">About me</h1>
        <p className="text-xs sm:text-lg pt-3">
          My name is Alwi wahyu waludin. I am a Junior Fullstack Web Developer.
          graduated from SMK Muhammadiyah 01 Pemalang as Telecommunications
          Network and Computer Engineering student. I live in Pemalang, Central
          Java, Indonesia.
        </p>
        <p className="text-xs sm:text-lg pt-3">
          I’m a self-taught learner who like to learn something new everyday. I
          have learned a lot of technologies espesially MERN tech stack in the
          past few years by myself on the Internet.
        </p>
        <p className="text-xs sm:text-lg pt-3">
          i have interested with technologies since i was kid, wondering if i
          can be tech proffesor one day and made many technological discoveries
          to help plants, animals, people, and the environment. I decided to
          learn web programming as my first step towards my big dream of helping
          people around using technology.
        </p>
        <h1 className="font-semibold text-base sm:text-2xl pt-3">Education</h1>
        <h2 className="text-sm sm:text-xl font-semibold pl-3">
          SMK Muhammadiyah 01 Pemalang
        </h2>
        <p className="text-xs sm:text-base pl-3 relative top-[-4px]">
          2020 - 2024
        </p>
        <p className="text-xs sm:text-base pl-3">
          telecommunications network and computer <br />
          engineering
        </p>
      </div>
    </div>
  );
}
