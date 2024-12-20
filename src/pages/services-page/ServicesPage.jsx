// Hooks
import { useEffect } from "react";
// components
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <Services />
      <Skills />
    </div>
  );
}

export default ServicesPage;
