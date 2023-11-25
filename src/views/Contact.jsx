import ContactForm from "../Components/Form";
import Navbar from "../Components/Navbar";
import NavBurger from "../Components/NavBurger";
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
    <main className="contact">
      <Headern />
      <section className="contact__navbar">
        <Navbar />
      </section>
      <section className="contact__info">
        <h1>Kontakt</h1>
        <p>
          Hej, har du några frågor kan du ringa, maila eller smsa. Vill du har
          svar snabbt så ring gärna. Du kan också kontakta mig via kontakt
          formuläret nedan.
        </p>
        <p>Du hittar mig lätt centralt i lerum brevid Rödakorset.</p>
        <article className="contact__section">
          <img className="contact__icon" src={phoneIcon} alt="Telefon Ikon" />
          <p>Mobil nummer: 954 983 098</p>
        </article>
        <article className="contact__section">
          <img className="contact__icon" src={mailIcon} alt="Brev Ikon" />
          <p>
            E-mail: <span className="contact__email">marie@valinder.se</span>
          </p>
        </article>
        <aside>
          <h1>Öppetider</h1>
          <p>måndag: 10-18</p>
          <p>Tisdag 9.30-18</p>
          <p>Onsdag: 9.30-18</p>
          <p>Torsdag: 9.30-18</p>
          <p>Fredag: 10.30-16</p>
        </aside>
      </section>
      <ContactForm />
      <Fragment>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Fragment>
      <section className="contact__navburger">
        <NavBurger />
      </section>
      <section className="contact__footer">
        <Footer />
      </section>
    </main>
  );
};
export default Contact;
