import { useState, useEffect } from "react";
import "../Sass/Form.scss";
import { useBeforeunload } from "react-beforeunload";
import { unstable_useBlocker as useBlocker } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useCallback } from "react";
import { validNumber, validEmail } from "./RegEx";
import MyModal from "./MyModal";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const ContactForm = () => {
  const [name, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [showSentForm, setShowSentForm] = useState(false);
  const [formHasChange, setFormHasChange] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [numberErr, setNumberErr] = useState(false);

  useBeforeunload(name !== "" ? (event) => event.preventDefault() : null);
  useBeforeunload(number !== "" ? (event) => event.preventDefault() : null);
  useBeforeunload(email !== "" ? (event) => event.preventDefault() : null);
  useBeforeunload(
    textMessage !== "" ? (event) => event.preventDefault() : null
  );
  useBeforeunload();

  let actionData = useActionData();
  let shouldBlock = useCallback(
    ({ currentLocation, nextLocation }) =>
      formHasChange !== false &&
      currentLocation.pathname !== nextLocation.pathname,
    [formHasChange]
  );
  let blocker = useBlocker(shouldBlock);
  useEffect(() => {
    if (actionData?.ok) {
      setFormHasChange(false);
    }
  }, [actionData]);

  useEffect(() => {
    if (blocker.state === "blocked" && formHasChange === false) {
      blocker.reset();
    }
  }, [blocker, formHasChange]);

  const submitForm = async () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
      return;
    }
    if (!validNumber.test(number)) {
      setNumberErr(true);
      return;
    }
    if (number.length > 11 || number.length < 10) {
      setNumberErr(true);
      return;
    }

    console.log(name, number, email, textMessage);
    if (name === "" || number === "" || email === "" || textMessage === "") {
      null;
    } else {
      setShowSentForm(true);
      setNumber("");
      setMessage("");
      setEmail("");
      setTextMessage("");
      setNumberErr(false);
      setEmailErr(false);
    }
  };

  return (
    <section className="form">
      <h2>Kontaktformulär</h2>
      <form
        onChange={() => {
          setFormHasChange(true);
        }}
        className="form__form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="Name">Namn</label>
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
        <label htmlFor="TelephoneNumber">
          Telefon nummer 10 siffror Ex: 070 490 75 89.
        </label>
        {numberErr && (
          <p className="form__warning">* Skriv in ett giltigt telefon nummer</p>
        )}
        <input
          required
          value={number}
          id="TelephoneNumber"
          className="form__input"
          type="number"
          placeholder="Telefon nummer"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <label htmlFor="EmailAdress">Email adress</label>
        {emailErr && (
          <p className="form__warning"> * Email adress stämmer inte</p>
        )}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          type="email"
          value={email}
          className="form__input"
          placeholder="E-mail"
          id="EmailAdress"
          autoComplete="email"
        />
        <label htmlFor="textMessage">Medelande</label>
        <input
          className="form__input"
          value={textMessage}
          type="text"
          id="textMessage"
          placeholder="Text Meddelande"
          required
          onChange={(e) => {
            setTextMessage(e.target.value);
          }}
        />

        <button type="submit" onClick={submitForm} className="form__button">
          Skicka
        </button>
      </form>

      {blocker.state === "blocked" ? <MyModal blocker={blocker} /> : null}

      {showSentForm &&
        createPortal(
          <Modal
            setShowSentForm={setShowSentForm}
            setFormHasChange={setFormHasChange}
          />,
          document.body
        )}
    </section>
  );
};
export default ContactForm;
