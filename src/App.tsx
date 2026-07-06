import { Navbar } from "@/layouts/Navbar";
import { Footer } from "@/layouts/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NoiseOverlay } from "@/components/BackgroundFX";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { StatsBand } from "@/sections/StatsBand";
import { Experience } from "@/sections/Experience";
import { NotableWork } from "@/sections/NotableWork";
import { Research } from "@/sections/Research";
import { Skills } from "@/sections/Skills";
import { Recognition } from "@/sections/Recognition";
import { Certifications } from "@/sections/Certifications";
import { ToolsTech } from "@/sections/ToolsTech";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <NoiseOverlay />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <StatsBand />
        <Experience />
        <NotableWork />
        <Research />
        <Skills />
        <Recognition />
        <Certifications />
        <ToolsTech />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
