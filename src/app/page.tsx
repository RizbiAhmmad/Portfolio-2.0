import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent w-full">
      <Banner />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
