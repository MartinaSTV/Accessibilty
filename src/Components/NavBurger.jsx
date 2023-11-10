import Navburger from "../assets/ham.svg";
import "../Sass/NavBurger.scss";

const NavBurger = () => {
  return (
    <nav className="nav">
      <button className="nav__button">
        <img className="nav__Icon" src={Navburger} alt="Knapp Meny" />
      </button>
    </nav>
  );
};
export default NavBurger;
