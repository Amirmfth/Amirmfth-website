import { useEffect, useRef } from "react";
import styles from "./HamburgerBtn.module.css";

function HamburgerBtn({ setOpenMenu }) {
  const hamburgerBtn = useRef(null);

  // handlers
  const menuHandler = (e) => {
    hamburgerBtn.current.classList.toggle(styles["open"]);
    setOpenMenu((prevValue) => !prevValue);
  };

  return (
    <button
      id="menu-btn"
      className={`z-30 self-center pr-16 block md:hidden focus:outline-none ${styles["hamburger"]}`}
      onClick={menuHandler}
      ref={hamburgerBtn}
    >
      <span className={`${styles["hamburger-top"]} dark:bg-white`}></span>
      <span className={`${styles["hamburger-middle"]} dark:bg-white`}></span>
      <span className={`${styles["hamburger-bottom"]} dark:bg-white`}></span>
    </button>
  );
}

export default HamburgerBtn;

// menuBtns.forEach((menuBtn) => menuBtn.addEventListener("click", menuHandler));
