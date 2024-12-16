import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />

    </Routes>
  )
}

export default Router
