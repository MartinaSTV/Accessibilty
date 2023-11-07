import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import Video from "../Components/video";
import Footer from "../Components/Footer";
import "../Sass/About.scss";

const About = () => {
  return (
    <article className="about">
      <Headern />
      <Navbar />
      <section className="about">
        <h1>Marie Valinder</h1>
        <p>
          Jag heter Marie Valinder och är Dipl. Cert. Massageterapeut & SPA
          terapeut. Jag har arbete som massör i 15 år och har under åren har
          gått på många föreläsningar och fortbildat mig om kroppen. Jag har
          också arbetat med idrottslag och har stor erfarenhet av idrottsskador.
        </p>
        <p> Medlem i kroppsterapeuternas yrkesförbund</p>
      </section>
      <Video />
      <Footer />
    </article>
  );
};
export default About;
