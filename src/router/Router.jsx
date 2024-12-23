import { Navigate, Route, Routes } from "react-router-dom";
// Pages
// EN
import HomePage from "../pages/home-page/HomePage";
import ServicesPage from "../pages/services-page/ServicesPage";
import AboutMePage from "../pages/about-me-page/AboutMePage";
// FA
import FaHomePage from "../FA/pages/home-page/HomePage";
import FaServicesPage from "../FA/pages/services-page/ServicesPage";
import FaAboutMePage from "../FA/pages/about-me-page/AboutMePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/en/home"} />} />
      {/* EN */}
      <Route path="/en/home" element={<HomePage />} />
      <Route path="/en/services" element={<ServicesPage />} />
      <Route path="/en/about-me" element={<AboutMePage />} />
      <Route path="/*" element={<Navigate to={"/en/home"} />} />
      {/* FA */}
      <Route path="/fa" element={<Navigate to={"/fa/home"} />} />
      <Route path="/fa/home" element={<FaHomePage />} />
      <Route path="/fa/services" element={<FaServicesPage />} />
      <Route path="/fa/about-me" element={<FaAboutMePage />} />
    </Routes>
  );
}

export default Router;
