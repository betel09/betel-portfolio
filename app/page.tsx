import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-[#8a9ab5] border-t border-[#2a3a52] bg-[#0a0f1a]">
  © 2025 Betel Yemanebirhan. All rights reserved.
</footer>
    </>
  );
}