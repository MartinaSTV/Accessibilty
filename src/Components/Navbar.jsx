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
        Starsida
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
    </nav>
  );
};
export default Navbar;
