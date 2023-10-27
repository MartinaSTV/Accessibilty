import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <a
        href=""
        onClick={() => {
          navigate("Accessibilty/");
        }}
      >
        Home
      </a>
      <a
        href=""
        onClick={() => {
          navigate("Accessibilty/About");
        }}
      >
        About
      </a>
      <a
        href=""
        onClick={() => {
          navigate("Accessibilty/Contact");
        }}
      >
        Contact
      </a>
    </nav>
  );
};
export default Navbar;
