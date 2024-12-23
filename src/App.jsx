// Hooks
import { useEffect, useState } from "react";
// Libraries
import Aos from "aos";
import "aos/dist/aos.css";
// Layout
import Layout from "./layouts/Layout";
// router
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
      </BrowserRouter>
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

export default App;
