import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
