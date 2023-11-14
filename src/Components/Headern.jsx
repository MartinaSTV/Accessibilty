import "../Sass/Header.scss";
import NavBurger from "./NavBurger";
import border from "../assets/UnderlineNew.jpg";

const Headern = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lerums Massage & Hudvård</h1>
      <img src={border} alt="" className="header__border" />
      <section className="header__navburger">
        <NavBurger />
      </section>
    </header>
  );
};
export default Headern;
