import Home from "@/section/home/Home";
import About from "@/section/about/About";
import Projects from "@/section/projects/Projects";
import Contacts from "@/section/contacts/Contacts";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center justify-between space-y-1 bg-[#f9f9f9]">
      <Home />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
