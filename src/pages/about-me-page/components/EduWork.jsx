import {
  faBriefcase,
  faDownload,
  faGraduationCap,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function EduWork() {
  return (
    <section>
      <div className="max-w-screen-lg flex flex-col items-start mx-auto py-10 px-4 space-y-12">
        {/* Education container */}
        <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-14 ">
          {/* Header */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-between space-y-6 md:w-5/12"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Lifelong Learner
            </h2>
            <p className="opacity-60 h-full">
              Passionate about lifelong learning and committed to staying
              updated with latest industry trends and advancements through
              ongoing education and training
            </p>
            <a
              href="/assets/files/Jobinja-CV.pdf"
              download={"fatahi-cv.pdf"}
              className="w-fit py-3 px-6 text-black  rounded-2xl border-2 border-gray-300 hover:bg-black hover:text-white duration-150 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black "
            >
              <div className="w-full flex space-x-3 items-center justify-center">
                <FontAwesomeIcon icon={faDownload} />
                <p>Download my CV</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col space-y-14  md:w-7/12">
            <h2 className="text-2xl font-semibold tracking-wide">
              Education history
            </h2>
            {/* Items */}
            <div className=" flex flex-col divide-y divide-gray-500 divide-opacity-60 md:pr-10 ">
              {/* Item 1 */}
              <div data-aos="fade-up" className="flex space-x-5 pb-8">
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray">
                  <FontAwesomeIcon size="xl" icon={faGraduationCap} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">
                    Shahid Beheshti's SAMPAD Highschool
                  </h2>
                  <p className="opacity-60">September 2017 - June 2021</p>
                </div>
              </div>
              {/* Item 2 */}
              <div data-aos="fade-up" className="flex space-x-5 py-8">
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray ">
                  <FontAwesomeIcon size="xl" icon={faGraduationCap} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">
                    Shahid Madani Highschool
                  </h2>
                  <p className="opacity-60">September 2021 - June 2022</p>
                </div>
              </div>
              {/* Item 3 */}
              <div data-aos="fade-up" className="flex space-x-5 py-8">
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray ">
                  <FontAwesomeIcon size="xl" icon={faUserGraduate} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">
                    Azad university S&R branch - Economics
                  </h2>
                  <p className="opacity-60">September 2022 - ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Work container */}
        <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-14 ">
          {/* Header */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-between space-y-6 md:w-5/12"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              Proven Practical Skills
            </h2>
            <p className="opacity-60 h-full">
              Hands-on experience applying theoretical knowledge to real-world
              challenges, resulting in tangible outcome and measurable results.
            </p>
            <button className="w-fit py-3 px-8 text-black  rounded-2xl border-2 border-gray-300 hover:bg-black hover:text-white duration-150 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black ">
              <Link to={"/showcase"}>See my work</Link>
            </button>
          </div>
          <div className="flex flex-col space-y-14  md:w-7/12">
            <h2 className="text-2xl font-semibold tracking-wide">
              Working Experience
            </h2>
            {/* Items */}
            <div className="flex flex-col divide-y divide-gray-500 divide-opacity-60 ">
              {/* Item 1 */}
              <div data-aos="fade-up" className="flex space-x-5 pb-8">
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray">
                  <FontAwesomeIcon size="xl" icon={faBriefcase} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">
                    Apprentice at MAPSA HR
                  </h2>
                  <p className="opacity-60">September 2022 - February 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EduWork;
