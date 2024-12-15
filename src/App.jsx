import Aos from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/home-page/HomePage";
import { useEffect } from "react";
import Layout from "./layouts/Layout";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
