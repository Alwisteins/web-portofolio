import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Projects from "./page/projects/Projects";
import Skills from "./page/skills/Skills";
import Contacts from "./page/contacts/Contacts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
