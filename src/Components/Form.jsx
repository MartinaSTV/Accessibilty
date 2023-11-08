import { useState } from "react";
import "../Sass/Form.scss";
import * as formData from "form-data";
import { NULL } from "sass";
//import { Mailgun } from "mailgun.js";
//import Mailgun from "mailgun.js";

const ContactForm = () => {
  const [name, setMessage] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");

  const API_KEY = import.meta.env.API_KEY;
  const DOMAIN = import.meta.env.DOMAIN;

  const mailgun = async () => {
    /* const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "https://api.eu.mailgun.net",
      key: API_KEY,
    });

    const messageData = {
      from: "Excited User <me@samples.mailgun.org>",
      to: "foldermate@hotmail.com",
      subject: "Hello",
      text: name,
    };

    client.messages
      .create(DOMAIN, messageData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      }); */
    console.log(name, number, email);
  };

  return (
    <section className="form">
      <h2>Contact form</h2>
      <form
        className="form__form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="Name">Name</label>
        <input
          autoComplete="given-name"
          required
          value={name}
          id="Name"
          className="form__input"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <label htmlFor="TelephoneNumber">Telephone number</label>
        <input
          required
          value={number}
          id="TelephoneNumber"
          className="form__input"
          type="number"
          placeholder="Telephone number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <label htmlFor="EmailAdress">Email adress</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          type="email"
          value={email}
          className="form__input"
          placeholder="email"
          id="EmailAdress"
          autoComplete="email"
        />

        <button type="submit" onClick={mailgun} className="form__button">
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
