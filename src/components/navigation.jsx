import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${isScrolled ? "scrolled" : ""}`}
      style={{
        transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        padding: isScrolled ? "6px 0" : "20px 0",
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: isScrolled ? "14px" : "24px",
              transform: isScrolled ? "scale(0.85)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <img
              src="img/logo.png"
              alt="Logo"
              style={{
                height: isScrolled ? "50px" : "60px",
                marginRight: "10px",
                transition: "height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              fontSize: isScrolled ? "14px" : "18px",
              fontWeight: "bold",
              transition: "font-size 0.3s ease-in-out",
            }}
          >
            <li
              className={activeMenu === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
            >
              <a
                href="#about"
                className="page-scroll"
                style={{
                  fontSize: isScrolled ? "14px" : "20px",
                  padding: "10px 15px",
                  transition: "font-size 0.3s ease-in-out",
                }}
              >
                About
              </a>
            </li>
            <li
              className={activeMenu === "services" ? "active" : ""}
              onClick={() => handleClick("services")}
            >
              <a
                href="#services"
                className="page-scroll"
                style={{
                  fontSize: isScrolled ? "14px" : "20px",
                  padding: "10px 15px",
                  transition: "font-size 0.3s ease-in-out",
                }}
              >
                Services
              </a>
            </li>
            <li
              className={activeMenu === "portfolio" ? "active" : ""}
              onClick={() => handleClick("portfolio")}
            >
              <a
                href="#portfolio"
                className="page-scroll"
                style={{
                  fontSize: isScrolled ? "14px" : "20px",
                  padding: "10px 15px",
                  transition: "font-size 0.3s ease-in-out",
                }}
              >
                Certificates
              </a>
            </li>
            <li
              className={activeMenu === "contact" ? "active" : ""}
              onClick={() => handleClick("contact")}
            >
              <a
                href="#contact"
                className="page-scroll"
                style={{
                  fontSize: isScrolled ? "14px" : "20px",
                  padding: "10px 15px",
                  transition: "font-size 0.3s ease-in-out",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
