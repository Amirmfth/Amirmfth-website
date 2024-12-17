// Components
import Hero from "./components/Hero";
import EduWork from "./components/EduWork";
import Abilities from "./components/Abilities";
// hooks
import { useEffect } from "react";
import Showcase from "./components/Showcase";

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <EduWork />
      <Abilities />
      <Showcase />
    </div>
  );
}

export default HomePage;
