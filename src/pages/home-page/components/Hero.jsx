import React from "react";

function Hero() {
  return (
    <section data-aos="fade-up" id="hero">
      <div className="container flex flex-col mx-auto px-8 p-32  pb-10 space-y-10  md:flex-row md:items-start md:space-y-0 md:space-x-20 md:pt-60">
        {/* Name & profile Image */}
        <div className="flex flex-col space-y-8">
          {/* Profile Image */}
          <img
            src="/assets/images/profile-image.jpg"
            alt="profile"
            className="w-16 rounded-full"
          />
          {/* Name */}
          <h1 className="text-3xl font-semibold text-left md:text-6xl">
            Hello! I'm Amir.M.Fatahi
          </h1>
        </div>
        {/* description & buttons */}
        <div className="flex flex-col space-y-8">
          {/* Description */}
          <h2 className="text-2xl text-left md:text-5xl">
            A React.js Developer based in Iran, Tehran.
          </h2>
          <p className="opacity-60 text-lg ">
            Passionate creating SPA and fully functional websites
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-white bg-black rounded-lg hover:opacity-70 hover:scale-105 dark:bg-white dark:text-black ">
              Talk with me
            </button>
            <button className="px-4 py-2 border border-black rounded-lg hover:opacity-70 hover:scale-105 dark:bg-black dark:text-white dark:border-white ">
              <a href="#">See my work</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
