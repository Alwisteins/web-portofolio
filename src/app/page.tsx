import Home from "@/section/home/Home";
import About from "@/section/about/About";

export default function Page() {
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-between space-y-1 bg-[#f9f9f9]">
        <Home />
        <About />
      </main>
    );
  }
  