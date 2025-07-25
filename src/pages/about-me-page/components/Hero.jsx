import {
  faGithub,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <section>
      {/* Hero container */}
      <div
        data-aos="fade-up"
        className="max-w-screen-lg flex flex-col items-start mx-auto pb-10 px-4 space-y-12 md:flex-row md:space-y-0 md:space-x-20 "
      >
        {/* Profile Image */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/profile-image.jpg"
            alt="profile"
            className="w-32 rounded-full md:w-60"
          />
        </div>
        {/* Information container */}
        <div className="flex flex-col space-y-6 md:space-y-10">
          <h1 className="text-4xl font-semibold md:text-6xl">Amir.M.Fatahi</h1>
          <h3 className="text-2xl font-semibold md:text-3xl">
            A Next.js developer based in Iran, Tehran.
          </h3>
          <p className="opacity-60">
            Passionate creating SPA and fully functional websites
          </p>
          {/* Social media */}
          <div className="flex space-x-6">
            {/* Icon 1 */}
            <a href="https://instagram.com/delay_z_one" target="_blank" className="flex p-3 items-center justify-center border-2 border-gray-300 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-150">
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </a>
            {/* Icon 2 */}
            <a href="https://t.me/delay_z_one" target="_blank" className="lex p-3 items-center justify-center border-2 border-gray-300 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-150">
              <FontAwesomeIcon size="xl" icon={faTelegram} />
            </a>
            {/* Icon 3 */}
            <a href="https://github.com/amirmfth" target="_blank" className="lex p-3 items-center justify-center border-2 border-gray-300 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-150">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
