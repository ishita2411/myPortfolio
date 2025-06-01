
'use client';

import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
