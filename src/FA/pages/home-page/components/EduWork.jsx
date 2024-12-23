import {
  faBriefcase,
  faGraduationCap,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EduWork() {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <section id="edu-work" className="bg-light-gray dark:bg-dark-gray">
          <div
            data-aos="fade-up"
            className="max-w-screen-lg flex flex-col pt-16 px-4 space-y-10 md:flex-row md:space-y-0 md:mx-auto "
          >
            {/* Education container */}
            <div className="flex flex-col space-y-5 md:w-1/2 ">
              {/* Header */}
              <h2 className="text-3xl font-semibold tracking-wide">
                Education history
              </h2>
              {/* Items */}
              <div className="flex flex-col   divide-y divide-gray-500 divide-opacity-60 md:pr-10 ">
                {/* Item 1 */}
                <div data-aos="fade-up" className="flex space-x-5 py-8">
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
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
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
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
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
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
            {/* Work container */}
            <div className="flex flex-col space-y-5 md:w-1/2 ">
              {/* Header */}
              <h2 className="text-3xl font-semibold tracking-wide">
                Working Experience
              </h2>
              {/* Items */}
              <div className="flex flex-col  divide-y divide-gray-500 divide-opacity-60 ">
                {/* Item 1 */}
                <div data-aos="fade-up" className="flex space-x-5 py-8">
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
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
        </section>
      ) : (
        <section id="edu-work" className="bg-light-gray dark:bg-dark-gray">
          <div
            data-aos="fade-up"
            className="max-w-screen-lg flex flex-col pt-16 px-4 space-y-10 md:flex-row md:space-y-0 md:mx-auto "
          >
            {/* Education container */}
            <div className="flex flex-col space-y-5 md:w-1/2 ">
              {/* Header */}
              <h2 className="text-3xl font-semibold tracking-wide">
                سابقه تحصیلی
              </h2>
              {/* Items */}
              <div className="flex flex-col divide-y divide-gray-500 divide-opacity-60 md:pl-10 ">
                {/* Item 1 */}
                <div
                  data-aos="fade-up"
                  className="flex space-x-5 space-x-reverse py-8"
                >
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
                    <FontAwesomeIcon size="xl" icon={faGraduationCap} />
                  </div>
                  {/* description */}
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold">
                      دبیرستان تیزهوشان شهید بهشتی
                    </h2>
                    <p className="opacity-60">مهر 1396 - خرداد 1401</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div
                  data-aos="fade-up"
                  className="flex space-x-5 space-x-reverse py-8"
                >
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
                    <FontAwesomeIcon size="xl" icon={faGraduationCap} />
                  </div>
                  {/* description */}
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold">
                      دبیرستان شهید مدنی
                    </h2>
                    <p className="opacity-60">مهر 1401 - خرداد 1402</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div data-aos="fade-up" className="flex space-x-5 space-x-reverse py-8">
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
                    <FontAwesomeIcon size="xl" icon={faUserGraduate} />
                  </div>
                  {/* description */}
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold">
                      دانشگاه علوم و تحقیقات - اقتصاد
                    </h2>
                    <p className="opacity-60">مهر 1402 - ...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Work container */}
            <div className="flex flex-col space-y-5 md:w-1/2 ">
              {/* Header */}
              <h2 className="text-3xl font-semibold tracking-wide">
                سابقه کاری
              </h2>
              {/* Items */}
              <div className="flex flex-col  divide-y divide-gray-500 divide-opacity-60 ">
                {/* Item 1 */}
                <div data-aos="fade-up" className="flex space-x-5 space-x-reverse py-8">
                  {/* Logo */}
                  <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-white p-4 dark:bg-black ">
                    <FontAwesomeIcon size="xl" icon={faBriefcase} />
                  </div>
                  {/* description */}
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold">
                      کارآموز در MAPSA HR
                    </h2>
                    <p className="opacity-60">مهر 1401 - فروردین 1402</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default EduWork;
