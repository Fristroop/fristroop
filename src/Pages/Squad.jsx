/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import "../assets/styles/squad.css";

export const Squad = () => {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        <section className="mt-5 mb-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Our Squad</h1>
              <p className="lead text-body-secondary"></p>
            </div>
          </div>
        </section>

        <div className="card-group justify-content-center">
          <div className="col-md-6">
            <div className="card border-0">
              <div className="card-body text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  className="d-flex mx-auto mb-3 rounded"
                  height={"100px"}
                  alt="..."
                />
                <h5 className="card-title">
                  @AydinTheFirst <small className="text-muted">(Founder)</small>{" "}
                </h5>

                <p className="card-text text-muted">
                  Hello! My name is Aydin, and I'm a 19-year-old student
                  majoring in English language and literature. I began my
                  journey at the age of 16, starting with an interest in website
                  development. I first worked on HTML, and later, I became
                  interested in Node.js. My initial project was a Discord bot,
                  and I have since improved my skills in web technologies. Now,
                  I'm here, and I want to assist you on your journey
                </p>
                <div className="card-text d-flex justify-content-center">
                  <a href="https://github.com/AydinTheFirst" className="btn fs-3">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/aydnhalil0/" className="btn fs-3">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
