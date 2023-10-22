import logo from "../assets/imgs/logo.png"

export const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <div className="mt-5 d-flex justify-content-center mb-5">
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
      </footer>
    </>
  );
};
