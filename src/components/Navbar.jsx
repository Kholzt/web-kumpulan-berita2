import React, { useEffect } from "react";

const Navbar = ({ navLight = false }) => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navbarBtn = document.querySelector(".navbar-toggler");

    const handleScroll = () => {
      const windowYExist = window.scrollY;
      if (windowYExist > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleNavbarBtnClick = () => {
      navbar.classList.toggle("active");
      navbar.querySelector(".fa").classList.toggle("fa-close");
      navbar.querySelector(".fa").classList.toggle("fa-bars");
    };

    document.addEventListener("scroll", handleScroll);
    navbarBtn.addEventListener("click", handleNavbarBtnClick);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      navbarBtn.removeEventListener("click", handleNavbarBtnClick);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg top-0 left-0 position-fixed w-100  ${
        !navLight ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Logo
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button">
          <i className="fa fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
