import About from "./about";
import ContactUs from "./contact-us";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import TechStack from "./tech-stack";

export default function HomeContent() {
  return (
    <div className="container-section grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 mb-10">
      <div className="flex flex-col gap-4">
        <About />
        <Education />
        <TechStack />
      </div>
      <div className="flex flex-col gap-4">
        <Experience />
        <Projects />
        {/* <Gallery /> */}
      </div>
      <div className="lg:col-span-2">
        <ContactUs />
      </div>
    </div>
  );
}
