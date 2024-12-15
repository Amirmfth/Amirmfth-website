import SwitchThemeBtn from "./SwitchThemeBtn";
import TimeBox from "./TimeBox";

function NavButtons() {
  return (
    <div className="hidden items-center justify-center space-x-4 md:flex">
      <TimeBox />
      <SwitchThemeBtn />
      <button className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
        Contact Me
      </button>
    </div>
  );
}

export default NavButtons;
