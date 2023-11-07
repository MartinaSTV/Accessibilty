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
          My name is Marie and I have worked as a Massage theraphist for 15
          years. I Have a lot of experience with sports injuries and
          rehabilitation. I got my degree from Axelssons School in Göteborg were
          i studied for 2 years and have since then been on numerous courses and
          classes to add on to my knowledge. I am a member of
          kroppsterapeuternas yrkesförbund. Dipl. Cert. Massageterapeut & SPA
          terapeut aktivt med idrottslag och har stor erfarenhet av
          idrottsskador.
        </p>
      </section>
      <Video />
      <Footer />
    </article>
  );
};
export default About;
