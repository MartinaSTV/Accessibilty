import "../Sass/Form.scss";
const MyModal = ({ blocker }) => {
  return (
    <article className="form__sent" role="alertdialog">
      <p>Säker att du vill lämna kontakt formuläret?</p>
      <button className="form__sentButton" onClick={() => blocker.proceed?.()}>
        Ja, lämna sida
      </button>
      <button className="form__sentButton" onClick={() => blocker.reset?.()}>
        Nej, stanna kvar
      </button>
    </article>
  );
};

export default MyModal;
