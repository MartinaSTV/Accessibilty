import ContactForm from "../Components/Form";
import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import Footer from "../Components/Footer";
import "../Sass/Contact.scss";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../Components/Breadcrumbs";
import phoneIcon from "../assets/phone-fill.svg";
import mailIcon from "../assets/mail.svg";

const Contact = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <article className="contact">
      <Headern />
      <Navbar />
      <section className="contact__info">
        <h1>Kontakt</h1>
        <p>
          Hej, har du några frågor kan du ringa, maila eller smsa. Vill du har
          svar snabbt så ring gärna. Du kan också kontakat mig via kontakt
          formuläret.
        </p>
        <p>Du hittar mig lätt centralt i lerum brevid Rödakorset.</p>
        <article className="contact__section">
          <img
            className="contact__icon"
            src={phoneIcon}
            alt="Bild på telefon"
          />
          <p>Mobil nummer: 954 983 098</p>
        </article>
        <article className="contact__section">
          <img
            className="contact__icon"
            src={mailIcon}
            alt="image of a letter"
          />
          <p>
            E-mail: <span className="contact__email">marie@valinder.se</span>
          </p>
        </article>
      </section>
      <ContactForm />
      <Fragment>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Fragment>
      <Footer />
    </article>
  );
};
export default Contact;
