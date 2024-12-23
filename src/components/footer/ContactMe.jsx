import { Link } from "react-router-dom";
import TimeBox from "../navbar/TimeBox";

function ContactMe() {
  const lang = localStorage.getItem("lang");
  return (
    <>
      {lang === "en" ? (
        <div className="flex flex-col space-y-6 justify-center items-center">
          <h3 className="text-center">Have a Project?</h3>
          <h1 className="text-center text-3xl font-semibold ">
            Let's talk with me
          </h1>
          <div className="flex flex-col items-center space-y-4 pt-6">
            <Link to={"/en/about-me#contact-me"}>
              <button className="px-5 py-3 w-fit text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
                Talk with me
              </button>
            </Link>
            <div className="flex items-center space-x-3">
              <span className="opacity-60">My local time</span>
              <TimeBox />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6 justify-center items-center">
          <h3 className="text-center">اگر پروژه ای داری؟</h3>
          <h1 className="text-center text-3xl font-semibold ">
            همین حالا با من صحبت کن
          </h1>
          <div className="flex flex-col items-center space-y-4 pt-6">
            <Link to={"/fa/about-me#contact-me"}>
              <button className="px-5 py-3 w-fit text-white  border-2 border-black rounded-xl bg-black hover:bg-white hover:text-black dark:bg-light-gray dark:border-light-gray dark:text-black dark:hover:bg-black dark:hover:text-light-gray duration-200">
                با من صحبت کن
              </button>
            </Link>
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="opacity-60">ساعت محلی من</span>
              <TimeBox />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactMe;
