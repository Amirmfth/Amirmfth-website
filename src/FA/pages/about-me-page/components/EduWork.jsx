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
        <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-14 md:space-x-reverse ">
          {/* Header */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-between space-y-6 md:w-5/12"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              یادگیری مداوم
            </h2>
            <p className="opacity-60 h-full">
              با اشتیاق به یادگیری مستمر و تعهد به همگام بودن با آخرین تحولات و
              پیشرفت های تکنولوژی از طریق دوره های مختلف
            </p>
            <a
              href="/assets/files/Jobinja-CV.pdf"
              download={"fatahi-cv.pdf"}
              className="w-fit py-3 px-6 text-black  rounded-2xl border-2 border-gray-300 hover:bg-black hover:text-white duration-150 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black "
            >
              <div className="w-full flex space-x-3 space-x-reverse items-center justify-center">
                <FontAwesomeIcon icon={faDownload} />
                <p>دانلود رزومه من</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col space-y-14  md:w-7/12">
            <h2 className="text-2xl font-semibold tracking-wide">
              سابقه تحصیلی
            </h2>
            {/* Items */}
            <div className=" flex flex-col divide-y divide-gray-500 divide-opacity-60 md:pl-10 ">
              {/* Item 1 */}
              <div
                data-aos="fade-up"
                className="flex space-x-5 space-x-reverse pb-8"
              >
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray">
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
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray ">
                  <FontAwesomeIcon size="xl" icon={faGraduationCap} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">دبیرستان شهید مدنی</h2>
                  <p className="opacity-60">مهر 1401 - خرداد 1402</p>
                </div>
              </div>
              {/* Item 3 */}
              <div
                data-aos="fade-up"
                className="flex space-x-5 space-x-reverse py-8"
              >
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray ">
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
        </div>
        {/* Work container */}
        <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-14 md:space-x-reverse ">
          {/* Header */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-between space-y-6 md:w-5/12"
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              مهارت های عملی اثبات شده
            </h2>
            <p className="opacity-60 h-full">
              تجربه عملی در پیاده سازی دانش تئوری در چالش های واقعی، با نتایج
              ملموس و مطلوب
            </p>
            <button className="w-fit py-3 px-8 text-black  rounded-2xl border-2 border-gray-300 hover:bg-black hover:text-white duration-150 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black ">
              <Link to={"/en/showcase"}>مشاهده نمونه کارها</Link>
            </button>
          </div>
          <div className="flex flex-col space-y-14  md:w-7/12">
            <h2 className="text-2xl font-semibold tracking-wide">سابقه کاری</h2>
            {/* Items */}
            <div className="flex flex-col divide-y divide-gray-500 divide-opacity-60 ">
              {/* Item 1 */}
              <div
                data-aos="fade-up"
                className="flex space-x-5 space-x-reverse pb-8"
              >
                {/* Logo */}
                <div className="flex h-fit my-auto items-center justify-center rounded-xl bg-light-gray p-4 dark:bg-dark-gray">
                  <FontAwesomeIcon size="xl" icon={faBriefcase} />
                </div>
                {/* description */}
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">کارآموز در MAPSA HR</h2>
                  <p className="opacity-60">مهر 1401 - فروردین 1402</p>
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
