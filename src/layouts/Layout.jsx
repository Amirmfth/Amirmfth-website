import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
