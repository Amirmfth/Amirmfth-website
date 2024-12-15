import SwitchThemeBtn from "./SwitchThemeBtn";
import TimeBox from "./TimeBox";

function MobileMenu({ openMenu }) {
  return (
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
      <div className="w-full py-3 text-left font-semibold text-lg">
        <a href="#features" className="block hover:text-softRed">
          Home
        </a>
      </div>
      {/* Item 2 */}
      <div className="w-full py-3 text-left font-semibold text-lg">
        <a href="#download" className="block hover:text-softRed">
          Education
        </a>
      </div>
      {/* Item 3 */}
      <div className="w-full py-3 text-left font-semibold text-lg">
        <a href="#faq" className="block hover:text-softRed">
          Services
        </a>
      </div>
      {/* Item 4 */}
      <div className="w-full py-3 text-left font-semibold text-lg">
        <a href="#" className="block hover:text-softRed">
          Show case
        </a>
      </div>
      {/* Item 5 */}
      <div className="w-full py-3 text-left font-semibold text-lg">
        <a href="#" className="block hover:text-softRed">
          About me
        </a>
      </div>
      {/* TimeBox */}
      <div className="flex w-full flex-col justify-between">
      <p className="text-left opacity-60">Tehran, Iran</p>
      <TimeBox />
    </div>
      {/* Buttons */}
      <div className="flex  w-full justify-between items-center px-2 py-4 rounded-2xl border-2 border-black dark:border-white">
        <SwitchThemeBtn />
        <button className="p-3 text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
