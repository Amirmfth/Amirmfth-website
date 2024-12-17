import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <section className=" bg-light-gray dark:bg-dark-gray">
      <div className="relative max-w-screen-lg flex flex-col mx-auto px-8 pt-10 pb-32
       space-y-10 md:flex-row md:space-y-0 md:space-x-24 ">
        {/* Header */}
        <div className="h-fit flex flex-col space-y-6 md:w-1/2 md:sticky md:top-40">
          <h2 className="text-3xl font-semibold leading-relaxed md:text-4xl">
            Let me assist you in achieving your goals
          </h2>
          <p className="opacity-60 ">
            I'm skilled at turning complex problems into elegant, user-friendly
            solutions that drive results. Whether you need a simple website or a
            complex web application, I've got the skills and expertise to
            deliver
          </p>
          <div className="hidden w-fit p-2 px-3 border border-black rounded-full md:block dark:border-white  ">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className=" w-fit p-2 px-3 border border-black rounded-full md:hidden dark:border-white  ">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        {/* Services container */}
        <div data-aos="fade-up" className="flex flex-col space-y-8 md:w-1/2">
          {/* Service 1 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
              <img
                src="/assets/images/graph-ql-blog-home.png"
                alt="bookmark"
                className=" w-4/6 h-full rounded-md "
              />
              <img
                src="/assets/images/graph-ql-blog-home-mobile.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Header */}
            <div data-aos="fade-up" className="flex flex-col space-y-6 ">
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* title */}
                <h2 className="text-2xl font-semibold text-left md:text-3xl">
                  Single page applications
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-left  ">
                  Fully functional SPA development. Easily navigate through
                  pages with no need to reload. The amazing UX can give your
                  audiance a better experience.
                </p>
                <a
                  href="https://amirmfth-graph-ql-blog.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                >
                  View example work
                </a>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
              <img
                src="/assets/images/crypto-app-home.png"
                alt="bookmark"
                className=" w-4/6 h-full rounded-md "
              />
              <img
                src="/assets/images/crypto-app-home-mobile.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Header */}
            <div data-aos="fade-up" className="flex flex-col space-y-6 ">
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* title */}
                <h2 className="text-2xl font-semibold text-left md:text-3xl">
                  Fluent connection to server
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-left  ">
                  Keep your website update with stable connection to servers
                  with GraphQL or REST apis. Seamless and quick access to your
                  database.
                </p>
                <a
                  href="https://amirmfth-crypto-app.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                >
                  View example work
                </a>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
              <img
                src="/assets/images/bookmark-home-desktop.png"
                alt="bookmark"
                className=" w-4/6 h-full rounded-md "
              />
              <img
                src="/assets/images/bookmark-home-mobile.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Header */}
            <div data-aos="fade-up" className="flex flex-col space-y-6 ">
              {/* Title & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* title */}
                <h2 className="text-2xl font-semibold text-left md:text-3xl">
                  Completely responsive web pages
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-left  ">
                  Make your websites responsive to any screen. Have a compatible
                  website for any user. Apply mobile-first design to your
                  website.
                </p>
                <a
                  href="https://amirmfth-bookmark-website.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white "
                >
                  View example work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
