import React from "react";

function Showcase() {
  return (
    <section className="bg-light-gray dark:bg-dark-gray">
      {/* Showcase container */}
      <div className="max-w-screen-lg flex flex-col mx-auto items-center px-4 py-10 space-y-5">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="mb-6 text-3xl font-semibold tracking-wide"
        >
          نمونه کارهای منتخب
        </h2>
        {/* Work container 1 */}
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:space-x-reverse">
          {/* Work 1 */}
          <div
            data-aos="fade-up"
            className="group overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white md:w-1/2 dark:bg-black"
          >
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
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
              <h2 className="text-3xl font-semibold">بلاگی</h2>
              <h4 className="text-xl font-semibold">وبسایتی برای وبلاگ نویسان</h4>
              <p className="opacity-60">
                این وبسایت برای وبلاگ نویسان است. با رابط کاربری مینیمالیستی و استفاده از سرور سریع و قدرتمند، انتخاب بسیاری از وبلاگ نویسان است.
              </p>
              <a
                href="https://amirmfth-graph-ql-blog.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                مشاهده وبسایت
              </a>
            </div>
          </div>
          {/* Work 2 */}
          <div
            data-aos="fade-up"
            className="group overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white md:w-1/2 dark:bg-black"
          >
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
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
              <h2 className="text-3xl font-semibold">بوک مارک</h2>
              <h4 className="text-md font-semibold">
                دسترسی راحت به وبسایت های مورد علاقه تان(فقط طراحی)
              </h4>
              <p className="opacity-60">
                یک تب جدید در مرورگر باز کنید و ببینید سایت های شما به سرعت لود میشوند. طراحی جذاب و UX ساده، این ابزار را به گزینه ای بهتر از سایر ابزار ها تبدیل میکند.
              </p>
              <a
                href="https://amirmfth-bookmark-website.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                مشاهده وبسایت
              </a>
            </div>
          </div>
        </div>
        {/* Work container 2 */}
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:space-x-reverse">
          {/* Work 3 */}
          <div
            data-aos="fade-up"
            className="group overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white md:w-1/2 dark:bg-black"
          >
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
              <img
                src="/assets/images/store-app-home.png"
                alt="bookmark"
                className=" h-full rounded-md"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col  pt-5 px-3 space-y-5 rounded-t-2xl duration-300 bg-white dark:bg-black md:h-48 md:group-hover:-translate-y-20">
              <h2 className="text-3xl font-semibold">وب استور</h2>
              <h4 className="text-xl font-semibold">اپلیکیشن خرید</h4>
              <p className="opacity-60">
                این برنامه کاربردی، نمایان گر یک وبسایت خرید واقعی با ویژگی های متعدد است. طراحی واضح و ساده یکی از مفاهیم کلیدی این وبسایت است.
              </p>
              <a
                href="https://amirmfth-store-app-react.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                مشاهده وبسایت
              </a>
            </div>
          </div>
          {/* Work 4 */}
          <div
            data-aos="fade-up"
            className="group overflow-y-hidden flex flex-col p-5 space-y-5 rounded-3xl bg-white md:w-1/2 dark:bg-black"
          >
            {/* Image container */}
            <div className="flex items-center justify-center w-full h-60 pt-2 mx-auto space-x-4 space-x-reverse bg-gradient-to-br  from-gray-200 to-slate-500  rounded-2xl  ">
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
              <h2 className="text-3xl font-semibold">کریپتولاگ</h2>
              <h4 className="text-xl font-semibold">
                بازار ارز دیجیتال در جیب شما
              </h4>
              <p className="opacity-60">
                دسترسی به اخرین اطلاعات بازار ارز دیجیتال تنها با چند کلیک. حجم عظیم اطلاعات، چیزیست که این وبسایت را منحصر به فرد میکند.
              </p>
              <a
                href="https://amirmfth-crypto-app.vercel.app"
                target="_blank"
                className="w-1/2 p-3 bg-black text-white text-center rounded-xl border border-black hover:bg-white hover:text-black duration-150  dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
              >
                مشاهده وبسایت
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
