import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDisplay,
  faArrowDown,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

function Abilities() {
  return (
    <section id="abilities" className=" bg-light-gray dark:bg-dark-gray">
      <div className="max-w-screen-lg flex flex-col mx-auto space-y-10 px-4 py-24">
        {/*Section Header */}
        <div
          data-aos="fade-up"
          className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:justify-between"
        >
          <h1 className="text-2xl text-left font-semibold tracking-wide md:text-4xl">
            I CAN HELP YOU WITH
          </h1>
          <button className="w-2/5 px-4 py-2 border border-gray-400 rounded-lg hover:opacity-70 dark:text-white md:w-fit md:py-3 md:px-6  ">
            See my work
          </button>
        </div>
        {/* Abilities Content */}
        <div data-aos="fade-up" className="flex flex-col space-y-20">
          {/* Ability 1 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Header */}
            <div
              data-aos="fade-up"
              className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:justify-between md:items-center"
            >
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 md:space-x-8 md:w-1/2 md:flex-row md:space-y-0">
                {/* Icon */}
                <div className="flex items-center justify-center w-fit h-fit bg-white rounded-full p-3 dark:bg-dark-gray brightness-125">
                  <FontAwesomeIcon icon={faDisplay} />
                </div>
                {/* title */}
                <h2 className="text-2xl font-semibold text-left md:text-3xl">
                  Single page applications
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 md:justify-between md:w-1/2 md:flex-row">
                {/* Text */}
                <p className="max-w-md pr-6 opacity-60 text-md text-left  ">
                  Fully functional SPA development. Easily navigate through
                  pages with no need to reload. The amazing UX can give your
                  audiance a better experience.
                </p>
                {/* Icon */}
                <div className="flex items-center justify-center rounded-full h-fit w-fit p-2 border border-black dark:border-white">
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              {/* Image container */}
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto bg-gradient-to-br from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/graph-ql-blog-home.png"
                  alt="graph-ql"
                  className=" h-full rounded-md"
                />
              </div>
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto bg-gradient-to-br from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/store-app-home.png"
                  alt="store-app"
                  className=" h-full rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Ability 2 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Header */}
            <div
              data-aos="fade-up"
              className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:justify-between md:items-center"
            >
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 md:space-x-8 md:w-1/2 md:flex-row md:space-y-0">
              {/* Icon */}
              <div className="flex items-center justify-center w-fit h-fit bg-white rounded-full p-3 dark:bg-dark-gray brightness-125">
                <FontAwesomeIcon icon={faServer} />
              </div>
              {/* title */}
              <h2 className="text-2xl font-semibold text-left md:text-3xl">
                Fluent connection to server
              </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 md:justify-between md:w-1/2 md:flex-row">
              {/* Text */}
              <p className="max-w-md pr-6 opacity-60 text-md text-left">
                Keep your website update with stable connection to servers with
                GraphQL or REST apis. Seamless and quick access to your
                database.
              </p>
              {/* Icon */}
              <div className="flex items-center justify-center rounded-full h-fit w-fit p-2 border border-black dark:border-white">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              {/* Image container */}
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto bg-gradient-to-br from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/crypto-app-home.png"
                  alt="crypto"
                  className=" h-full rounded-md"
                />
              </div>
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto bg-gradient-to-br from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/graph-ql-blog-home.png"
                  alt="graph-ql"
                  className=" h-full rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Ability 3 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Header */}
            <div
              data-aos="fade-up"
              className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:justify-between md:items-center"
            >
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 md:space-x-8 md:w-1/2 md:flex-row md:space-y-0">
              {/* Icon */}
              <div className="flex items-center justify-center w-fit h-fit bg-white rounded-full p-3 dark:bg-dark-gray brightness-125">
                <FontAwesomeIcon icon={faWindowRestore} />
              </div>
              {/* title */}
              <h2 className="text-2xl font-semibold text-left md:text-3xl">
                Completely responsive web pages
              </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 md:justify-between md:w-1/2 md:flex-row">
              {/* Text */}
              <p className="max-w-md pr-6 opacity-60 text-md text-left  ">
                Make your websites responsive to any screen. Have a compatible
                website for any user. Apply mobile-first design to your website.
              </p>
              {/* Icon */}
              <div className="flex items-center justify-center rounded-full h-fit w-fit p-2 border border-black dark:border-white">
                <FontAwesomeIcon icon={faArrowDown} />
              </div> 
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              {/* Image container */}
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/bookmark-home-desktop.png"
                  alt="bookmark"
                  className=" w-4/6 h-full rounded-md"
                />
                <img
                  src="/assets/images/bookmark-home-mobile.png"
                  alt="bookmark"
                  className=" h-full rounded-md"
                />
              </div>
              <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br from-gray-200 to-slate-500  rounded-2xl  md:w-1/2">
                <img
                  src="/assets/images/loopstudio-home-desktop.png"
                  alt="loopstudio"
                  className=" w-4/6 h-full  rounded-md "
                />
                <img
                  src="/assets/images/loopstudio-home-mobile.png"
                  alt="graph-ql"
                  className=" h-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abilities;
