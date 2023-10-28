import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { projects } from "../config";

export const Projects = () => {
  return (
    <>
      <Navbar />

      <main className="container">
        <section className="mt-5 mb-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Projects</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
            </div>
          </div>
        </section>

        <div className="album mb-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((p, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    width="100%"
                    height="225"
                    src={p.banner}
                  />
                  <div className="card-body">
                    <a
                      href={p.href}
                      className="fs-4 text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.title}
                    </a>
                    <p className="card-text mt-2">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
