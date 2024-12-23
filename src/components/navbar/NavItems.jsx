import React from "react";
import { Link } from "react-router-dom";

function Navitems() {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="flex items-center space-x-10 ">
          {/* Logo */}
          <div className="flex items-center justify-center ml-6 ">
            <img
              src="/assets/images/my-website-logo-webp.webp"
              alt="logo"
              className="w-12"
            />
          </div>
          {/* Items container */}
          <div className="hidden space-x-8 md:flex text-lg ">
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
        <div className="flex items-center space-x-10 space-x-reverse ">
          {/* Logo */}
          <div className="flex items-center justify-center mr-6 ">
            <img
              src="/assets/images/my-website-logo-webp.webp"
              alt="logo"
              className="w-12"
            />
          </div>
          {/* Items container */}
          <div className="hidden space-x-8 space-x-reverse justify-around md:flex text-lg ">
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

export default Navitems;
