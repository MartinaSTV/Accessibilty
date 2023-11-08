import "../Sass/Footer.scss";
import phoneIcon from "../assets/phone-fill.svg";
import mailIcon from "../assets/mail.svg";
import fbLogo from "../assets/fb.svg";

const Footer = () => {
  return (
    <section className="footer__whole">
      <article className="footer">
        <section className="footer__info">
          <h2 className="footer__title">Adress</h2>
          <p className="footer__text">Göteborgsvägen 15C</p>
          <p>44 33 0 Lerum</p>
        </section>
        <section className="footer__info">
          <h2 className="footer__title">Öppetider</h2>
          <p>måndag: 10-18</p>
          <p>Tisdag 9.30-18</p>
          <p>Onsdag: 9.30-18</p>
          <p>Torsdag: 9.30-18</p>
          <p>Fredag: 10.30-16</p>
        </section>
        <section className="footer__info">
          <h2 className="footer__titleContact">Kontakt</h2>
          <p className="footer__name">Marie Valinder</p>
          <article className="footer__section">
            <img className="footer__icon" src={phoneIcon} alt="phone image" />
            <p>Mobil nummer: 954 983 098</p>
          </article>
          <article className="footer__section">
            <img
              className="footer__icon"
              src={mailIcon}
              alt="image of a letter"
            />
            <p>
              E-mail: <span className="footer__email">marie@valinder.se</span>
            </p>
          </article>
        </section>
      </article>{" "}
      <article className="footer__bottom">
        <img
          className="footer__iconFB"
          src={fbLogo}
          alt="image of Facebook logo"
        />
      </article>
    </section>
  );
};
export default Footer;
