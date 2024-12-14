import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <Navbar />
      {/* <div className="h-screen"></div> */}
      <HomePage />
    </div>
  );
}

export default App;
