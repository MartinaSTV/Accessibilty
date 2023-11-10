import "../Sass/Header.scss";
import NavBurger from "./NavBurger";

const Headern = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lerums Massage & Hudvård</h1>
      <section className="header__navburger">
        <NavBurger />
      </section>
    </header>
  );
};
export default Headern;
