import Navbar from "../Components/Navbar";
import NavBurger from "../Components/NavBurger";
import Headern from "../Components/Headern";
import Footer from "../Components/Footer";
import "../Sass/About.scss";
import mariePhoto from "../assets/777.jpg";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../Components/Breadcrumbs";

const About = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <main className="about">
      <Headern />
      <section className="home__navbar">
        <Navbar />
      </section>
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
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </Fragment>
      </section>
      <section className="home__navburger">
        <NavBurger />
      </section>
      <section className="home__footer">
        <Footer />
      </section>
    </main>
  );
};
export default About;
