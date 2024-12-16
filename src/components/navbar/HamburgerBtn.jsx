import styles from "./HamburgerBtn.module.css";

function HamburgerBtn({menuHandler ,hamburgerRef}) {
  return (
    <button
      id="menu-btn"
      className={`z-30 self-center pr-16 block md:hidden focus:outline-none ${styles["hamburger"]}`}
      onClick={menuHandler}
      ref={hamburgerRef}
    >
      <span className={`${styles["hamburger-top"]} dark:bg-white`}></span>
      <span className={`${styles["hamburger-middle"]} dark:bg-white`}></span>
      <span className={`${styles["hamburger-bottom"]} dark:bg-white`}></span>
    </button>
  );
}

export default HamburgerBtn;

// menuBtns.forEach((menuBtn) => menuBtn.addEventListener("click", menuHandler));
