import logo from "../assets/imgs/logo.png";
import { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) document.body.style.paddingTop = `${navbar.offsetHeight}px`;
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
              <ul className="navbar-nav flex-row flex-wrap flex-grow-1 px-3">
                <li className="nav-item col-6 col-md-auto">
                  <a href="/" className="nav-link active">
                    <i className="fa-solid fa-share-from-square me-2 d-md-none"></i>
                    Home
                  </a>
                </li>
                <li className="nav-item col-6 col-md-auto">
                  <a href="/projects" className="nav-link">
                    <i className="fa-solid fa-list-check me-2 d-md-none"></i>
                    Projects
                  </a>
                </li>
                <li className="nav-item col-6 col-md-auto">
                  <a href="/pricing" className="nav-link">
                    <i className="fa-solid fa-hand-holding-dollar me-2 d-md-none"></i>
                    Pricing
                  </a>
                </li>
                <li className="nav-item col-6 col-md-auto">
                  <a href="/squad" className="nav-link">
                    <i className="fa-solid fa-user-group me-2 d-md-none text-nowrap"></i>
                    Squad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
