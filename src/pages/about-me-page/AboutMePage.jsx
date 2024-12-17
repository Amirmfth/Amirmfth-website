import { useEffect } from "react";
import Hero from "./components/Hero";
import Values from "./components/Values";
import EduWork from "./components/EduWork";

function AboutMePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <Values />
      <EduWork />
    </div>
  );
}

export default AboutMePage;
