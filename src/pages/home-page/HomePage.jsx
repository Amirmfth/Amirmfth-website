import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Abilities from "./components/Abilities";
import Hero from "./components/Hero";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div>
      <Hero />
      <Abilities />
      <button className="fixed right-4 bottom-10 py-2 px-3 rounded-lg text-white bg-black md:right-10 dark:bg-white dark:text-black" onClick={e => window.scrollTo({top:0})}>
        <FontAwesomeIcon icon={faArrowUp}/>
        </button>
    </div>
  );
}

export default HomePage;
