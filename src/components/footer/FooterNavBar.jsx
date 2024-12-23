import React from "react";
import { Link } from "react-router-dom";

function FooterNavBar() {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="flex flex-col w-full items-center justify-between space-y-6 md:flex-row md:space-y-0 ">
          {/* Name */}
          <div className="flex items-center justify-center md:space-x-4">
            <h2 className="text-2xl font-semibold text-center">Fatahi</h2>
            <p className="hidden opacity-80 md:block">React.js developer</p>
          </div>
          {/* Items container */}
          <div className="flex flex-col text-lg space-y-6 items-center md:flex-row md:space-y-0 md:space-x-12 ">
            {/* Item 1 */}
            <div className="group">
              <Link to={"/en/home"}>Home</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 2 */}
            <div className="group">
              <Link to={"/en/services"}>Services</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 3 */}
            <div className="group">
              <a href="#">Showcase</a>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 4 */}
            <div className="group">
              <Link to={"/en/about-me"}>About me</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-between space-y-6 md:flex-row md:space-y-0 ">
          {/* Name */}
          <div className="flex items-center justify-center md:space-x-4 md:space-x-reverse">
            <h2 className="text-2xl font-semibold text-center">فتاحی</h2>
            <p className="hidden opacity-80 md:block">برنامه نویس React.js</p>
          </div>
          {/* Items container */}
          <div className="flex flex-col text-lg space-y-6 items-center md:flex-row md:space-y-0 md:space-x-12 md:space-x-reverse ">
            {/* Item 1 */}
            <div className="group">
              <Link to={"/fa/home"}>خانه</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 2 */}
            <div className="group">
              <Link to={"/fa/services"}>خدمات</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 3 */}
            <div className="group">
              <a href="#">نمایشگاه</a>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
            {/* Item 4 */}
            <div className="group">
              <Link to={"/fa/about-me"}>درباره من</Link>
              <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterNavBar;
