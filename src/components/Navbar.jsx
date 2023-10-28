import logo from "../assets/imgs/logo.png";
import { useEffect } from "react";
import { social } from "../config";

export const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) document.body.style.paddingTop = `${navbar.offsetHeight}px`;

    const links = document.querySelectorAll(".nav-link");
    const currentPage = location.href;
    for (const link of links) {
      let ms;
      if (link.href === currentPage) ms = "add";
      else ms = "remove";

      link.classList[ms]("active");
    }
  }, []);

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a href={"/"} className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" height="50" className="logo mx-1" />
            <div className="fs-5 fw-bold m-0">FRISTROOP</div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "280px", height: "100vh" }}
          >
            <div className="offcanvas-header border-bottom">
              <a href={"/"} className="navbar-brand d-flex align-items-center">
                <img src={logo} alt="Logo" height="50" className="logo mx-1" />
                <div className="fs-5 fw-bold m-0">FRISTROOP</div>
              </a>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav flex-wrap flex-grow-1">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fa-solid fa-share-from-square me-2 d-md-none"></i>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/projects" className="nav-link">
                    <i className="fa-solid fa-list-check me-2 d-md-none"></i>
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/pricing" className="nav-link">
                    <i className="fa-solid fa-hand-holding-dollar me-2 d-md-none"></i>
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/squad" className="nav-link">
                    <i className="fa-solid fa-user-group me-2 d-md-none text-nowrap"></i>
                    Squad
                  </a>
                </li>
              </ul>
              <hr />
              <div className="navbar-nav flex-row flex-wrap ms-md-auto">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link col-6 col-md-auto"
                >
                  <i className="fa-brands fa-github"></i>
                  <small className="d-md-none ms-2">Github</small>
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link col-6 col-md-auto"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                  <small className="d-md-none ms-2">X</small>
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link col-6 col-md-auto"
                >
                  <i className="fa-brands fa-instagram"></i>
                  <small className="d-md-none ms-2">Instagram</small>
                </a>
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link col-6 col-md-auto"
                >
                  <i className="fa-brands fa-tiktok"></i>
                  <small className="d-md-none ms-2">Tiktok</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
