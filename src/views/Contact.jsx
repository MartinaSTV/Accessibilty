import ContactForm from "../Components/Form";
import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import Footer from "../Components/Footer";
import "../Sass/Contact.scss";

const Contact = () => {
  return (
    <article className="contact">
      <Headern />
      <Navbar />
      <ContactForm />
      <Footer />
    </article>
  );
};
export default Contact;
