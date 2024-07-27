import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, navLight, bgLight }) {
  return (
    <div className={`${bgLight ? "light" : ""}`}>
      <Navbar navLight={navLight} />
      {children}
      <Footer />
    </div>
  );
}
