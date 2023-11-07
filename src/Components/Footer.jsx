import "../Sass/Footer.scss";
const Footer = () => {
  return (
    <article className="footer">
      <section className="footer__info">
        <h2 className="footer__title">Adress</h2>
        <p className="footer__text">Göteborgsvägen 15C</p>
        <p>44 33 0 Lerum</p>
      </section>
      <section className="footer__info">
        <h2 className="footer__title">Öppetider</h2>
        <p>Måndag-Fredag</p>
        <p>10-18</p>
      </section>
      <section className="footer__info">
        <h2 className="footer__title">Marie Valinder</h2>
        <p>Mobil nummer: 954 983 098</p>
        <p>E-mail: marie@valinder.se</p>
      </section>
    </article>
  );
};
export default Footer;
