/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import "../assets/styles/squad.css";
import { social } from "../config";

export const Squad = () => {
  const squad = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64N43TRHQIznXrMGk3MxoYwJ7nA9hbcskDWAgmO4&s",
      username: "AydinTheFirst",
      role: "Founder",
      skills: [
        {
          color: "text-warning",
          icon: "fa-brands fa-js",
          label: "JavaScript",
          href: "https://nodejs.org",
        },
        {
          color: "text-success",
          icon: "fa-brands fa-node-js",
          label: "NodeJS",
          href: "https://nodejs.org",
        },
        {
          color: "text-warning",
          icon: "fa-solid fa-database",
          label: "MongoDB",
          href: "https://www.mongodb.com",
        },
        {
          color: "text-primary",
          icon: "fa-brands fa-react",
          label: "React",
          href: "https://react.dev",
        },
        {
          color: "text-primary",
          icon: "fa-brands fa-bootstrap",
          label: "Bootstrap",
          href: "https://react.dev",
        },
      ],
      socials: [
        {
          icon: "fa-brands fa-github",
          label: "Github",
          href: "https://github.com/AydinTheFirst",
        },
        {
          icon: "fa-brands fa-instagram",
          label: "Instagram",
          href: "https://www.instagram.com/aydnhalil0/",
        },
      ],
    },
  ];
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

        <div className="d-flex flex-row flex-wrap gap-3 justify-content-center px-2">
          {squad.map((user, i) => (
            <div
              key={i}
              className="profile card col-md-4 bg-dark-subtle rounded p-0"
            >
              <div className="bg-success px-3 py-5 header rounded-top">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="avatar p-1 bg-dark-subtle"
                  height={100}
                />
              </div>
              <div className="body px-3">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <h5>
                      {user.username}
                      <small className="ms-3 text-muted">{user.role}</small>
                    </h5>
                  </div>
                </div>
                <div className="inner-body bg-secondary-subtle rounded p-3 mb-3">
                  <ul className="list-unstyled details">
                    <li className="mb-3">
                      <small className="m-0 text-muted fw-bold">Skills</small>
                      <div className="d-flex flex-wrap gap-3 align-items-center">
                        {user.skills.map((s, i) => (
                          <a href={s.href} className="nav-link" key={i}>
                            <i className={`${s.icon} ${s.color} me-2`}></i>
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </li>
                    <li className="mb-3">
                      <small className="m-0 text-muted fw-bold">Socials</small>
                      <div className="d-flex flex-wrap gap-3 align-items-center">
                        {user.socials.map((s, i) => (
                          <a href={s.href} className="nav-link" key={i}>
                            <i className={`${s.icon} ${s.color} me-2`}></i>
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
