import { useEffect } from "react";
import Hero from "./components/Hero";
import Values from "./components/Values";
import EduWork from "./components/EduWork";
import ContactInfo from "./components/ContactInfo";

function AboutMePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (location.hash === "#contact-me") {
      const contactMe = document
        .getElementById("contact-me")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <Values />
      <EduWork />
      <ContactInfo />
    </div>
  );
}

export default AboutMePage;
