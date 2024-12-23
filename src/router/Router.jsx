import { Navigate, Route, Routes } from "react-router-dom";
// Pages
// EN
import HomePage from "../pages/home-page/HomePage";
import ServicesPage from "../pages/services-page/ServicesPage";
import AboutMePage from "../pages/about-me-page/AboutMePage";
// FA
import FaHomePage from "../fa/pages/home-page/HomePage";

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
      <Route path="/fa/services" element={<ServicesPage />} />
      <Route path="/fa/about-me" element={<AboutMePage />} />
    </Routes>
  );
}

export default Router;
