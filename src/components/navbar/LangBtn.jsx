import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LangBtn() {
  const navigate = useNavigate();
  const htmlElm = document.querySelector("html");
  const [langState, setLangState] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      const lang = localStorage.getItem("lang");
      setLangState(lang);
      htmlElm.lang = lang;
      htmlElm.dir = lang === "fa" ? "rtl" : "ltr";
      navigate(`/${lang}`);
    } else {
      localStorage.setItem("lang", "en");
      localStorage.getItem("lang");
      setLangState("en");
      htmlElm.lang = "en";
      htmlElm.dir = "ltr";
      navigate("/en");
    }
  }, []);
  // handler
  const langHandler = (e) => {
    if (e.target.innerText === "EN") {
      htmlElm.lang = "en";
      htmlElm.dir = "ltr";
      localStorage.setItem("lang", "en");
      setLangState("en");
    } else if (e.target.innerText === "FA") {
      htmlElm.lang = "fa";
      htmlElm.dir = "rlf";
      localStorage.setItem("lang", "fa");
      setLangState("fa");
    }
  };
  return (
    <div className="flex items-center space-x-2 rounded-full bg-light-gray dark:bg-dark-gray p-1">
      <button
        onClick={langHandler}
        className={`px-4 py-2 text-sm font-semibold rounded-full ${
          langState === "en" && "bg-white dark:bg-black"
        }`}
      >
        EN
      </button>
      <button
        onClick={langHandler}
        className={`px-4 py-2 text-sm font-semibold rounded-full ${
          langState === "fa" && "bg-white dark:bg-black"
        }`}
      >
        FA
      </button>
    </div>
  );
}

export default LangBtn;
