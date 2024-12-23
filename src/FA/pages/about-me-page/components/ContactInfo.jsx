import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo() {
  return (
    <section id="contact-me" className="bg-light-gray dark:bg-dark-gray">
      {/* Contact info container */}
      <div
        data-aos="fade-up"
        className="max-w-screen-lg flex flex-col mx-auto px-4 space-y-12 py-20"
      >
        {/* Header */}
        <h2 className="text-3xl font-semibold md:text-5xl">
          راه های ارتباط با من:
        </h2>
        {/* Social media */}
        <div className="flex flex-col space-y-5 justify-around md:flex-row md:space-y-0 md:space-x-5 md:space-x-reverse">
          {/* container 1 */}
          <div
            data-aos="fade-up"
            className="  flex flex-col space-y-5 bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white md:w-1/2 p-6 "
          >
            {/* Item 1 */}
            <a
              href="https://instagram.com/delay_z_one"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute right-10 -top-4 opacity-60 rounded-xl p-1">
                اینستاگرام
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faInstagram} />
                <h4 className="text-xl">@delay_z_one</h4>
              </div>
            </a>
            {/* Item 2 */}
            <a
              href="https://linkedin.com/in/amir-mohammad-fatahi-93a879220/"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute  right-10 -top-4 opacity-60 rounded-xl p-1">
                لینکدین
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faLinkedin} />
                <h4 className="text-xl">amir-mohammad-fatahi</h4>
              </div>
            </a>
            {/* Item 3 */}
            <a
              href="mailto:amirmf831380@gmail.com"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute  right-10 -top-4 opacity-60 rounded-xl p-1">
                ایمیل
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faAt} />
                <h4 className="text-xl">amirmf831380@gmail.com</h4>
              </div>
            </a>
          </div>
          {/* Container 2 */}
          <div
            data-aos="fade-up"
            className=" flex flex-col space-y-5 bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white md:w-1/2 p-6 "
          >
            {/* Item 1 */}
            <a
              href="https://t.me/delay_z_one"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute  right-10 -top-4 opacity-60 rounded-xl p-1">
                تلگرام
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faTelegram} />
                <h4 className="text-xl">delay_z_one</h4>
              </div>
            </a>
            {/* Item 2 */}
            <a
              href="https://wa.me/989398332265"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute  right-10 -top-4 opacity-60 rounded-xl p-1">
                واتسآپ
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faWhatsapp} />
                <h4 className="text-xl">Amirmfth</h4>
              </div>
            </a>
            {/* Item 3 */}
            <a
              href="tel:+989398332265"
              className="relative p-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl hover:scale-105 duration-150"
              target="_blank"
            >
              <span className="absolute  right-10 -top-4 opacity-60 rounded-xl p-1">
                تلفن همراه
              </span>
              <div className="flex items-center space-x-3 space-x-reverse p-2">
                <FontAwesomeIcon size="2x" icon={faPhone} />
                <h4 className="text-xl">98-939-833-2265+</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
