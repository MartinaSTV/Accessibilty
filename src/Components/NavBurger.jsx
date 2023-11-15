import "../Sass/NavBurger.scss";
import { useNavigate } from "react-router-dom";
import house from "../assets/homeIcon.svg";
import info from "../assets/infoIcon.svg";
import contact from "../assets/contact.svg";
import calender from "../assets/calender.svg";

const NavBurger = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <a
        className="nav__link"
        href=""
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={house} alt="Bild på Hus ikon" className="nav__Icon" />
        Hem
      </a>
      <a
        className="nav__link"
        href=""
        onClick={() => {
          navigate("/About");
        }}
      >
        <img src={info} alt="Bild på informations ikon" className="nav__Icon" />
        Om
      </a>
      <a
        className="nav__link"
        href=""
        onClick={() => {
          navigate("/Contact");
        }}
      >
        <img src={contact} alt="Bild på kontackt ikon" className="nav__Icon" />
        Kontakt
      </a>
      <a
        className="nav__link"
        href="https://www.bokadirekt.se/places/lerums-massage-hudvard-49166"
        title="Link to booking paga"
      >
        <img
          src={calender}
          alt="Bild på informations ikon"
          className="nav__Icon"
        />
        Boka Direkt!
      </a>
    </nav>
  );
};
export default NavBurger;
