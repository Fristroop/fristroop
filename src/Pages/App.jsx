/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/app.css";
import { Navbar } from "../components/Navbar";
import logo from "../assets/imgs/logo.png";
import coding from "../assets/imgs/coding.jpg";
import { Theme } from "../components/Theme";

export const App = () => {
  return (
    <>
      <Theme />
      <Navbar />

      <main className="container mt-5">
        <div className="col-md-6 mb-5 mx-auto text-center fw-bold">
          <img src={logo} width={"200px"} alt="" />
          <h1 className="colored fw-bold">Experience the Extraordinary</h1>
          <div className="fs-3 mb-3">Get Your Dream Website</div>
          <p className="text-muted">
            We are dedicated to assisting you in creating stunning, accessible,
            fast, and secure websites that perform seamlessly across all
            browsers and ensure an exceptional experience for all of your users
          </p>

          <div className="mb-3">
            <button className="btn btn-outline-success btn-lg border-3 rounded-circle">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>

          <button className="btn border">
            <small>$ </small>
            <code>sudo hire best-developers --now</code>
          </button>
        </div>

        <div className="col-12 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="fs-1 fw-bold pb-2 border-bottom">
                About Fristroop
              </div>
              <p className="fw-semibold lh-base mt-2">
                At <span className="text-success fw-bold">Fristroop</span>, we
                believe in the power of the web to transform and elevate
                businesses. Our mission is to empower you with the knowledge,
                tools, and insights to build exceptional web experiences that
                not only meet but exceed the expectations of your users. We
                understand the critical importance of web accessibility, speed,
                and security in today's digital landscape.
                <span className="text-info">
                  {" "}
                  That's why we're here to provide you with the latest insights,
                  tips, and best practices to help you stay at the forefront of
                  web development.
                </span>
                Whether you're a seasoned
                <span className="text-warning"> entrepreneur</span> or just
                starting your journey, you'll find a wealth of resources and
                expertise here to support you.
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

        <div className="col-12 px-4 py-5" data-aos="fadeIn">
          <h2 className="pb-2 border-bottom">What do we offer?</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-bolt text-warning flex-shrink-0 me-3 fs-3"></i>
              <div>
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
              <div>
                <h4 className="fw-bold mb-1">Security</h4>
                <p className="text-muted">
                  Prioritize security by preventing vulnerabilities and
                  protecting user information with SSL certificates.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-user-check  text-success flex-shrink-0 me-3 fs-3"></i>
              <div>
                <h4 className="fw-bold mb-1">
                  User-Friendly Interface (UI/UX)
                </h4>
                <p className="text-muted">
                  Your website will have an easy-to-navigate and user-friendly
                  design, with visually appealing ad content to engage users
                  effectively.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-wand-magic-sparkles text-danger flex-shrink-0 me-3 fs-3"></i>
              <div>
                <h4 className="fw-bold mb-1">Animations And Designs</h4>
                <p className="text-muted">
                  With smooth colored designs your community will love your new
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">x</div>
      </main>
    </>
  );
};