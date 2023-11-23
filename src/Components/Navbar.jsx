import { useNavigate } from "react-router-dom";
import "../Sass/Navbar.scss";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <a
        className="navbar__link"
        href=""
        onClick={() => {
          navigate("/");
        }}
      >
        Hem
      </a>
      <a
        className="navbar__link"
        href=""
        onClick={() => {
          navigate("/About");
        }}
      >
        Om
      </a>
      <a
        className="navbar__link"
        href=""
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Kontakt
      </a>

      <a
        className="navbar__buttonBookLink"
        href="https://www.bokadirekt.se/places/lerums-massage-hudvard-49166"
        title="Link to booking paga"
      >
        Boka Direkt!
      </a>
    </nav>
  );
};
export default Navbar;
