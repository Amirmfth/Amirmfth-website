import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen p-8 dark:bg-black dark:text-white">
    <Navbar/>
      <HomePage />
    </div>
  );
}

export default App;
