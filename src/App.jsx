// Hooks
import { useEffect } from "react";
// Libraries
import Aos from "aos";
import "aos/dist/aos.css";
// Layout
import Layout from "./layouts/Layout";
// router
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

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
       <Router/>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
