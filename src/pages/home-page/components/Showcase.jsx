import React from "react";

function Showcase() {
  return (
    <section className="bg-light-gray dark:bg-dark-gray">
      {/* Showcase container */}
      <div className="flex flex-col items-center px-4 py-10 space-y-5">
        {/* Title */}
        <h2 className="mb-6 text-3xl font-semibold tracking-wide">
          Selected works
        </h2>
        {/* Work container 1 */}
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          {/* Work 1 */}
          <div className="group max-w-lg overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white dark:bg-black">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
              <img
                src="/assets/images/graph-ql-blog-home.png"
                alt="bookmark"
                className=" w-4/6 h-full rounded-md"
              />
              <img
                src="/assets/images/graph-ql-blog-home-mobile.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col pt-5 px-3 space-y-5 rounded-t-2xl duration-300 bg-white dark:bg-black md:h-48 md:group-hover:-translate-y-20">
              <h2 className="text-3xl font-semibold">Bloggy</h2>
              <h4 className="text-xl font-semibold">A Blogging Website</h4>
              <p className="opacity-60">
                This website is for bloggers. With minimalistic interface using
                a fast and powerful server, it is the choice of many bloggers.
              </p>
              <a
                href="https://amirmfth-graph-ql-blog.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                View detail works
              </a>
            </div>
          </div>
          {/* Work 2 */}
          <div className="group max-w-lg overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white dark:bg-black">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
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
            {/* Content */}
            <div className="flex flex-col  pt-5 px-3 space-y-5 rounded-t-2xl duration-300 bg-white dark:bg-black md:h-48 md:group-hover:-translate-y-20">
              <h2 className="text-3xl font-semibold">Bookmark</h2>
              <h4 className="text-xl font-semibold">
                Keep your favorite website close(design only)
              </h4>
              <p className="opacity-60">
                Organize your favorite websites. Open a new Browser tab and see
                your sites load instantly. Engaging design and simple UX make
                this tool a better option than any other.
              </p>
              <a
                href="https://amirmfth-bookmark-website.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                View detail works
              </a>
            </div>
          </div>
        </div>
        {/* Work container 2 */}
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          {/* Work 3 */}
          <div className="group max-w-lg overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white dark:bg-black">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
              <img
                src="/assets/images/store-app-home.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col  pt-5 px-3 space-y-5 rounded-t-2xl duration-300 bg-white dark:bg-black md:h-48 md:group-hover:-translate-y-20">
              <h2 className="text-3xl font-semibold">WebStore</h2>
              <h4 className="text-xl font-semibold">Shopping Application</h4>
              <p className="opacity-60">
                This is an application representing an actual shopping website
                with many usefull features. Straight forward designing is one of
                the key concepts of this website.
              </p>
              <a
                href="https://amirmfth-store-app-react.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                View detail works
              </a>
            </div>
          </div>
          {/* Work 4 */}
          <div className="group max-w-lg overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white dark:bg-black">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
              <img
                src="/assets/images/crypto-app-home.png"
                alt="bookmark"
                className=" w-4/6 h-full rounded-md"
              />
              <img
                src="/assets/images/crypto-app-home-mobile.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col  pt-5 px-3 space-y-5 rounded-t-2xl duration-300 bg-white dark:bg-black md:h-48 md:group-hover:-translate-y-20">
              <h2 className="text-3xl font-semibold">CryptoLog</h2>
              <h4 className="text-xl font-semibold">
                CryptoMarket in your pocket
              </h4>
              <p className="opacity-60">
                Check the latest info on CryptoMarket with only few clicks. the
                vast amount of information is what makes this website unique.
              </p>
              <a
                href="https://amirmfth-crypto-app.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                View detail works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
