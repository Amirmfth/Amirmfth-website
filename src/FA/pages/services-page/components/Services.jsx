import { faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <section className=" bg-light-gray dark:bg-dark-gray">
      <div
        className="relative max-w-screen-lg flex flex-col mx-auto px-8 pt-10 pb-32
       space-y-10 md:flex-row md:space-y-0 md:space-x-24 md:space-x-reverse "
      >
        {/* Header */}
        <div className="h-fit flex flex-col space-y-6 md:w-1/2 md:sticky md:top-40">
          <h2 className="text-3xl font-semibold leading-relaxed md:text-4xl">
            اجازه دهید در رسیدن شما به اهدافتان کمک کنم
          </h2>
          <p className="opacity-60 ">
            من در تبدیل مشکلات پیچیده به راهکارهای زیبا، کاربرپسند و نتیجه گرا
            تخصص دارم. چه به یک وبسایت ساده نیاز داشته باشید و چه به یک وب
            اپلیکیشن پیچیده، من مهارت و تخصص لازم برای ارائه آن را دارم.
          </p>
          <div className="hidden w-fit p-2 px-3 border border-black rounded-full md:block dark:border-white  ">
            <FontAwesomeIcon icon={faArrowLeft} />
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
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
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
                <h2 className="text-2xl font-semibold text-right md:text-3xl">
                  اپلیکیشن های تک صفحه ای
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-right  ">
                  توسعه SPA، جابجایی آسان بین صفحات بدون نیاز به بارگذاری مجدد.
                  UX بینظیر می تواند تجربه ای بهتر برای کاربران شما فراهم کند
                </p>
                <a
                  href="https://amirmfth-graph-ql-blog.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                >
                  مشاهده وبسایت
                </a>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
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
                <h2 className="text-2xl font-semibold text-right md:text-3xl">
                  اتصال روان به سرور
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-right  ">
                  وبسایت خود را با اتصال پایدار به سرورهایی که از GraphQL یا
                  REST API استفاده میکنند، به روز نگه دارید. دسترسی روان و سریع
                  به پایگاه داده.
                </p>
                <a
                  href="https://amirmfth-crypto-app.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                >
                  مشاهده وبسایت
                </a>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div data-aos="fade-up" className="flex flex-col space-y-6">
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl overflow-x-hidden">
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
                <h2 className="text-2xl font-semibold text-right md:text-3xl">
                  صفحات وب کاملا واکنش گرا
                </h2>
              </div>
              {/* Text & icon container */}
              <div className="flex flex-col w-full space-y-6 ">
                {/* Text */}
                <p className="opacity-60 text-md text-right  ">
                  وبسایت های خود را برای هر اندازه صفحه نمایشی واکنش گرا کنید.
                  وبسایتی سازگار برای هر کاربر داشته باشید. اصول طراحی
                  Mobile-first را به وبسایت خود اعمال کنید.
                </p>
                <a
                  href="https://amirmfth-bookmark-website.vercel.app"
                  target="_blank"
                  className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white "
                >
                  مشاهده وبسایت
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
