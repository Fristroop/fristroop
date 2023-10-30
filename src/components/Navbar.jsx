import logo from "../assets/imgs/logo.png";
import { useEffect } from "react";
import { pages, socials } from "../config";

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
        <div className="container">
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
              <ul className="navbar-nav flex-wrap flex-grow-1 align-items-md-center">
                {pages.map((p, i) => (
                  <li key={i} className="nav-item">
                    <a href={p.href} className="nav-link">
                      <i className={`fa-solid  ${p.icon} me-2 d-md-none`}></i>
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="navbar-nav flex-row flex-wrap">
                {socials.map((p, i) => (
                  <li key={i} className="nav-item col-6 col-md-auto">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link"
                    >
                      <i className={`${p.icon} me-2`}></i>
                      <small className="d-md-none text-capitalize">
                        {p.label}
                      </small>
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
