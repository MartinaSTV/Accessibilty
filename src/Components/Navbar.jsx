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
        Home
      </a>
      <a
        className="navbar__link"
        href=""
        onClick={() => {
          navigate("/About");
        }}
      >
        About
      </a>
      <a
        className="navbar__link"
        href=""
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </a>
    </nav>
  );
};
export default Navbar;
