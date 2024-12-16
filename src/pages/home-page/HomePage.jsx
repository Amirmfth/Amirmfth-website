
// Components
import Hero from "./components/Hero";
import EduWork from "./components/EduWork";
import Abilities from "./components/Abilities";

function HomePage() {
  return (
    <div className="pt-32 md:pt-60">
      <Hero />
      <EduWork />
      <Abilities />
    </div>
  );
}

export default HomePage;
