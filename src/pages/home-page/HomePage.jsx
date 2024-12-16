import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// Components
import Hero from "./components/Hero";
import EduWork from "./components/EduWork";
import Abilities from "./components/Abilities";

function HomePage() {
  return (
    <div>
      <Hero />
      <EduWork />
      <Abilities />
      {/* Fixed button */}
      <button
        className="fixed right-4 bottom-10 py-2 px-3 rounded-lg text-white bg-black md:right-10 dark:bg-white dark:text-black"
        onClick={(e) => window.scrollTo({ top: 0 })}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default HomePage;
