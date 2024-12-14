import NavButtons from "./NavButtons";
import Navitems from "./navItems";

function Navbar() {
  return (
    <nav className="fixed z-40 left-0 top-0 right-0 w-full bg-white dark:bg-black">
      <div className="container flex mb-8 mx-auto pt-8  justify-between">
        <Navitems />
        <NavButtons />
      </div>
    </nav>
  );
}

export default Navbar;
