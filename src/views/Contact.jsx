import ContactForm from "../Components/Form";
import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import Footer from "../Components/Footer";
import "../Sass/Contact.scss";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../Components/Breadcrumbs";
const Contact = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <article className="contact">
      <Headern />
      <Navbar />
      <ContactForm />
      <Fragment>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Fragment>
      <Footer />
    </article>
  );
};
export default Contact;
