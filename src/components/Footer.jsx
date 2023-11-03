import logo from "../assets/imgs/logo.png";
import { pages, socials } from "../config";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark-subtle border-top">
        <div className="container py-5 px-5">
          <div className="row">
            <div className="col-lg-3 mb-3 d-flex justify-content-center">
              <a href={"/"} className="nav-link d-flex">
                <img src={logo} alt="Logo" height="100" className="mx-1" />
                <div className="fs-2 fw-bold m-0">
                  FRISTROOP
                  <p className="text-muted fs-6">Copyright © 2023 Fristroop.</p>
                </div>
              </a>
            </div>

            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5 className="text-muted">Pages</h5>
              <ul className="list-unstyled">
                {pages.map((p, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={p.href}
                      className="link-body-emphasis text-decoration-none"
                    >
                      <i className={`fas ${p.icon} me-2`}></i>
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-lg-2 mb-3">
              <h5 className="text-muted">Social</h5>
              <ul className="list-unstyled">
                {socials.map((p, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-body-emphasis text-decoration-none"
                    >
                      <i className={`${p.icon} me-2`}></i>
                      <span className="text-capitalize">{p.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
