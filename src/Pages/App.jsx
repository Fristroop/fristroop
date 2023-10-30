/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Theme } from "../components/Theme";
import { Footer } from "../components/Footer";

import "../assets/styles/app.css";

import logo from "../assets/imgs/logo.png";
import coding from "../assets/imgs/coding.jpg";
import { socials } from "../config";

export const App = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
    });
  }, []);
  return (
    <>
      <Theme />
      <Navbar />

      <main className="container mt-5">
        <div className="col-md-6 mb-5 mx-auto text-center fw-bold">
          <div className="box rounded rounded-5 p-3 mb-3">
            <span className="rounded rounded-5"></span>
            <img src={logo} width={"200px"} alt="" />
          </div>
          <h1 className="colored fw-bold">Experience the Extraordinary</h1>
          <div className="fs-3 mb-3">Let Dreams Come True</div>
          <p className="text-muted">
            We are dedicated tocreating stunning, accessible, fast, and secure
            websites that perform seamlessly across all browsers and ensure an
            exceptional experience for everyone
          </p>

          <div className="my-3">
            <a href={socials[0].href} className="fs-1 text-body-emphasis">
              <i className="fa-brands fa-github me-1"></i>
            </a>
          </div>

          <a href="/pricing" className="btn border" data-aos="fade-in">
            <small className="me-2">$</small>
            <code style={{ color: "var(--bs-code-color)" }}>
              sudo hire best-developers --now
            </code>
          </a>
        </div>

        <div className="col-12 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="fs-1 fw-bold pb-2 border-bottom">
                About Fristroop
              </div>
              <p className="fw-semibold lh-base mt-2" data-aos="zoom-in">
                At <span className="text-success fw-bold">Fristroop</span>, we
                believe in the power of the web to transform and elevate
                businesses. Our mission is to empower you with the knowledge,
                tools, and insights to build exceptional web experiences that
                not only meet but exceed the expectations of our users. We
                understand the critical importance of web accessibility, speed,
                and security in today's digital landscape.
                <span
                  className="text-info"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  That's why we're here to provide with the latest insights,
                  tips, and best practices to stay at the forefront of web
                  development.
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={coding}
                className="img-fluid rounded"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-12 mb-3">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-bolt text-warning flex-shrink-0 me-3 fs-3"></i>
              <div data-aos="fade-in">
                <h4 className="fw-bold mb-1">Fast and Optimized</h4>
                <p className="text-muted">
                  Enhance website loading speed through caching and Content
                  Delivery Network (CDN) integration, ensuring a smooth user
                  experience.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-user-shield text-info flex-shrink-0 me-3 fs-3"></i>
              <div data-aos="fade-in">
                <h4 className="fw-bold mb-1">Security</h4>
                <p className="text-muted">
                  Prioritize security by preventing vulnerabilities and
                  protecting user information with SSL certificates.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-user-check  text-success flex-shrink-0 me-3 fs-3"></i>
              <div data-aos="fade-in">
                <h4 className="fw-bold mb-1">
                  User-Friendly Interface (UI/UX)
                </h4>
                <p className="text-muted">
                  Our websites have an easy-to-navigate and user-friendly
                  design, with visually appealing ad content to engage users
                  effectively.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-wand-magic-sparkles text-danger flex-shrink-0 me-3 fs-3"></i>
              <div data-aos="fade-in">
                <h4 className="fw-bold mb-1">Animations And Designs</h4>
                <p className="text-muted">
                  With smooth colored designs we will provide best exprience to
                  our users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 my-5 d-flex justify-content-center">
          <a href="/pricing" className="btn btn-outline-success fw-bold">
            Start your journey with Fristroop now!
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};
