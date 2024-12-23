import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LangBtn() {
  const navigate = useNavigate();
  const htmlElm = document.querySelector("html");
  const [lang, setLang] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      const lang = localStorage.getItem("lang");
      setLang(lang);
      htmlElm.lang = lang;
      htmlElm.dir = lang === "fa" ? "rtl" : "ltr";
      navigate(`./${lang}`);
    } else {
      localStorage.setItem("lang", "en");
      localStorage.getItem("lang");
      setLang("en");
      htmlElm.lang = "en";
      htmlElm.dir = "ltr";
      navigate("./en");
    }
  }, []);
  // handler
  const langHandler = (e) => {
    if (e.target.innerText === "EN") {
      htmlElm.lang = "en";
      htmlElm.dir = "ltr";
      localStorage.setItem("lang", "en");
      setLang("en");
      navigate("./en");
      window.location.reload();
    } else if (e.target.innerText === "فا") {
      htmlElm.lang = "fa";
      htmlElm.dir = "rtl";
      localStorage.setItem("lang", "fa");
      setLang("fa");
      navigate("./fa");
      window.location.reload();
    }
  };
  return (
    <div
      className={`flex items-center space-x-2 ${
        lang === "fa" ? "space-x-reverse" : ""
      } rounded-full bg-light-gray dark:bg-dark-gray p-1`}
    >
      <button
        onClick={langHandler}
        className={`w-1/2 px-4 py-2 text-sm font-semibold rounded-full ${
          lang === "en" && "bg-white dark:bg-black"
        }`}
      >
        EN
      </button>
      <button
        onClick={langHandler}
        className={`w-1/2 px-4 py-2 text-sm font-semibold rounded-full ${
          lang === "fa" && "bg-white dark:bg-black" 
        }`}
      >
        فا
      </button>
    </div>
  );
}

export default LangBtn;
