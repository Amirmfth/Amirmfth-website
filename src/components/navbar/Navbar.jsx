import { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import MobileMenu from "./MobileMenu";
import NavButtons from "./NavButtons";
import Navitems from "./NavItems";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="fixed z-40 left-0 top-0 right-0 w-full bg-white dark:bg-black">
      <div className="container flex mb-8 mx-auto pt-8  justify-between">
        <Navitems />
        <NavButtons />
        <HamburgerBtn  setOpenMenu={setOpenMenu}/>
      </div>
      <MobileMenu openMenu={openMenu} />
    </nav>
  );
}

export default Navbar;
