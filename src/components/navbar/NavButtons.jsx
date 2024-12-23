import { Link } from "react-router-dom";
import SwitchThemeBtn from "./SwitchThemeBtn";
import TimeBox from "./TimeBox";
import LangBtn from "./LangBtn";

function NavButtons() {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="hidden items-center justify-center space-x-4 md:flex">
          <div className="flex w-fit flex-col justify-between ">
            <p className="text-left opacity-60">Tehran, Iran</p>
            <TimeBox />
          </div>
          <SwitchThemeBtn />
          <LangBtn />
          <Link to={"/en/about-me#contact-me"}>
            <button className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
              Contact me
            </button>
          </Link>
        </div>
      ) : (
        <div className="hidden items-center justify-center space-x-4 space-x-reverse md:flex">
          <div className="flex w-fit flex-col justify-between ">
            <p className="text-left opacity-60">Tehran, Iran</p>
            <TimeBox />
          </div>
          <SwitchThemeBtn />
          <LangBtn />
          <Link to={"/fa/about-me#contact-me"}>
            <button className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
              تماس با من
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default NavButtons;
