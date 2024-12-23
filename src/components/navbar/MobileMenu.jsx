import { Link } from "react-router-dom";
import SwitchThemeBtn from "./SwitchThemeBtn";
import TimeBox from "./TimeBox";
import LangBtn from "./LangBtn";

function MobileMenu({ openMenu, menuHandler }) {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            openMenu ? " flex h-screen" : "h-0 "
          }  flex-col items-center self-end w-full px-6 py-1 space-y-8  duration-300 bg-white dark:bg-black`}
        >
          {/* Logo */}
          <div className="flex w-full mt-7 items-center justify-start ">
            <img
              src="/assets/images/my-website-logo-webp.webp"
              alt="logo"
              className="w-12"
            />
          </div>
          {/* Item 1 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-left font-semibold text-lg"
          >
            <Link to={"/en/home"}>Home</Link>
          </div>
          {/* Item 2 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-left font-semibold text-lg"
          >
            <Link to={"/en/services"}>Services</Link>
          </div>
          {/* Item 3 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-left font-semibold text-lg"
          >
            <a href="#" className="block hover:text-softRed">
              Showcase
            </a>
          </div>
          {/* Item 4 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-left font-semibold text-lg"
          >
            <Link to={"/en/about-me"}>About me</Link>
          </div>
          {/* TimeBox */}
          <div className="flex w-full flex-col justify-between">
            <p className="text-left opacity-60">Tehran, Iran</p>
            <TimeBox />
          </div>
          {/* Buttons */}
          <div className="flex  w-full justify-between items-center px-2 py-4 rounded-2xl border-2 border-black dark:border-white">
            <SwitchThemeBtn />
            <LangBtn />
            <Link to={"/en/about-me#contact-me"}>
              <button
                onClick={menuHandler}
                className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200"
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            openMenu ? " flex h-screen" : "h-0 "
          }  flex-col items-center self-end w-full px-6 py-1 space-y-8  duration-300 bg-white dark:bg-black`}
        >
          {/* Logo */}
          <div className="flex w-full mt-7 items-center justify-start ">
            <img
              src="/assets/images/my-website-logo-webp.webp"
              alt="logo"
              className="w-12"
            />
          </div>
          {/* Item 1 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-right font-semibold text-lg"
          >
            <Link to={"/fa/home"}>خانه</Link>
          </div>
          {/* Item 2 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-right font-semibold text-lg"
          >
            <Link to={"/fa/services"}>خدمات</Link>
          </div>
          {/* Item 3 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-right font-semibold text-lg"
          >
            <a href="#" className="block hover:text-softRed">
              نمایشگاه
            </a>
          </div>
          {/* Item 4 */}
          <div
            onClick={menuHandler}
            className="w-full py-3 text-right font-semibold text-lg"
          >
            <Link to={"/fa/about-me"}>درباره من</Link>
          </div>
          {/* TimeBox */}
          <div className="flex w-full flex-col justify-between">
            <p className="text-right opacity-60">Tehran, Iran</p>
            <TimeBox />
          </div>
          {/* Buttons */}
          <div className="flex  w-full justify-between items-center px-2 py-4 rounded-2xl border-2 border-black dark:border-white">
            <SwitchThemeBtn />
            <LangBtn />
            <Link to={"/fa/about-me#contact-me"}>
              <button
                onClick={menuHandler}
                className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200"
              >
                تماس با من
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
