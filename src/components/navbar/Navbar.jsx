import { useRef, useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import MobileMenu from "./MobileMenu";
import NavButtons from "./NavButtons";
import Navitems from "./NavItems";
// Styles
import styles from "./HamburgerBtn.module.css";

function Navbar() {
  
  const [openMenu, setOpenMenu] = useState(false)

  const bodyElm = document.querySelector("body")
  const hamburgerBtn = useRef(null)

  // Handler
  const menuHandler = (e) => {
      hamburgerBtn.current.classList.toggle(styles["open"]);
      bodyElm.classList.toggle("no-scroll")
      setOpenMenu((prevValue) => !prevValue);
    };

  return (
    <nav className="fixed z-40 left-0 top-0 right-0 w-full bg-white dark:bg-black">
      <div className="max-w-screen-lg flex mb-8 mx-auto pt-8  justify-between">
        <Navitems />
        <NavButtons />
        <HamburgerBtn  menuHandler={menuHandler} hamburgerRef={hamburgerBtn}/>
      </div>
      <MobileMenu openMenu={openMenu} menuHandler={menuHandler} />
    </nav>
  );
}

export default Navbar;
