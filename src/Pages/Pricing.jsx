/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Pricing = () => {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        <section className="mt-5 mb-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Pricing</h1>
              <p className="lead text-body-secondary">
                The base price for any website serves as the starting point in
                our pricing structure. The final cost will be determined based
                on the specific features you want to include in your website.
                Each project is unique, and factors such as database
                integration, user authentication systems, e-commerce features,
                mobile-responsive design, SEO optimization, and other
                specialized functionalities can affect the final price. Our goal
                is to provide you with a customized and transparent cost
                estimate that reflects your project's complexity and
                requirements. We are committed to delivering high-quality web
                solutions that align with your budget and objectives, and we're
                here to assist you throughout the process of achieving your
                online goals.
              </p>
            </div>
          </div>
        </section>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Basic</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $50
                  <small className="text-body-secondary fw-light">/year</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Basic website design</li>
                  <li>Basic SEO optimization</li>
                  <li>Mobile-responsive design</li>
                  <li>99% Uptime</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $100
                  <small className="text-body-secondary fw-light">/year</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Advanced website design</li>
                  <li>Advanced SEO optimization</li>
                  <li>Social media integration</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Custom</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Custom website design</li>
                  <li>API integrations</li>
                  <li>Database Integrations</li>
                  <li>Custom plugins and advanced features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="col"></th>
                <th className="col">Basic</th>
                <th className="col">Pro</th>
                <th className="col">Custom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Website design
                </th>
                <td>Basic</td>
                <td>Advaned</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  SEO optimization
                </th>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Mobile-responsive design
                </th>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
                <td>
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Uptime
                </th>
                <td>99%</td>
                <td>99%</td>
                <td>99%</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Domain
                </th>
                <td>example.fristroop.com</td>
                <td>Custom</td>
                <td>Free .com domain</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Help Center Access
                </th>
                <td>Email / Discord</td>
                <td>Whatsapp</td>
                <td>Whatsapp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </>
  );
};
