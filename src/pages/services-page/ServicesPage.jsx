// Hooks
import { useEffect } from "react";
// components
import Hero from "./components/Hero";
import Services from "./components/Services";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <Services />
    </div>
  );
}

export default ServicesPage;
