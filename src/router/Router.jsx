import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "../pages/home-page/HomePage";
import ServicesPage from "../pages/services-page/ServicesPage";
import AboutMePage from "../pages/about-me-page/AboutMePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  );
}

export default Router;
