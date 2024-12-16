import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "../pages/home-page/HomePage";
import ServicesPage from "../pages/services-page/ServicesPage";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />

    </Routes>
  )
}

export default Router
