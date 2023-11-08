import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import Footer from "../Components/Footer";
import "../Sass/About.scss";
import mariePhoto from "../assets/777.jpg";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const About = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <article className="about">
      <Headern />
      <Navbar />
      <section className="about__section">
        <article className="about__person">
          <h1>Marie Valinder</h1>
          <p>
            Jag heter Marie Valinder och är Dipl. Cert. Massageterapeut & SPA
            terapeut. Jag har arbete som massör i 15 år och har under åren har
            gått på många föreläsningar och fortbildat mig om kroppen. Jag har
            också arbetat med idrottslag och har stor erfarenhet av
            idrottsskador.
          </p>
          <p> Medlem i kroppsterapeuternas yrkesförbund</p>
        </article>
        <img
          className="about__photo"
          src={mariePhoto}
          alt="Personfoto Marie Valinder"
        />
      </section>
      <section className="about__fragment">
        <Fragment>
          {breadcrumbs.map(({ breadcrumb }, idx) => {
            return (
              <p className="about__page" key={idx}>
                {breadcrumb}
              </p>
            );
          })}
        </Fragment>
      </section>

      <Footer />
      <Footer />
    </article>
  );
};
export default About;
