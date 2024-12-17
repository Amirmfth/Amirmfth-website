import React from "react";
import { Link } from "react-router-dom";

function Navitems() {
  return (
    <div className="flex items-center space-x-10 ">
      {/* Logo */}
      <div className="flex items-center justify-center ml-6 ">
        <img src="/assets/images/my-website-logo-webp.webp" alt="logo" className="w-12" />
      </div>
      {/* Items container */}
      <div className="hidden space-x-8 md:flex text-lg ">
      {/* Item 1 */}
      <div className="group">
        <Link to={"/home"} >Home</Link>
        <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
      </div>
      {/* Item 2 */}
      <div className="group">
      <Link to={"/services"} >Services</Link>
        <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
      </div>
      {/* Item 3 */}
      <div className="group">
        <a href="#">Show case</a>
        <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
      </div>
      {/* Item 4 */}
      <div className="group">
        <Link to={"/about-me"}>Aboute me</Link>
        <div className="w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white"></div>
      </div>
      </div>
    </div>
  );
}

export default Navitems;
