import logo from "../assets/imgs/logo.png";
import { pages, social } from "../config";

export const Footer = () => {
  return (
    <>
      <footer className="py-5 px-3 my-5 border-top">
        <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col mb-3 d-flex">
            <a
              href={"/"}
              className="link-body-emphasis  text-decoration-none d-flex align-items-center"
            >
              <img src={logo} alt="Logo" height="100" className="mx-1" />
              <div className="fs-2 fw-bold m-0">
                FRISTROOP
                <p className="text-muted fs-6">Copyright © 2023 Fristroop.</p>
              </div>
            </a>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Pages</h5>
            <ul className="nav flex-column">
              {pages.map((p, i) => (
                <li key={i} className="nav-item mb-2">
                  <a href={p.href} className="nav-link p-0 text-body-secondary">
                    <i className={`fa-solid  ${p.icon} me-2`}></i>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Social</h5>
            <ul className="nav flex-column">
              {Object.entries(social).map(([k, v], i) => (
                <li key={i} className="nav-item mb-2">
                  <a
                    href={v}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link p-0 text-body-secondary"
                  >
                    <i className={`fa-brands fa-${k} me-2`}></i>
                    <span className="text-capitalize">{k}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
