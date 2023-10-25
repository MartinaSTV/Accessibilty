import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <a
        href=""
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </a>
      <a
        href=""
        onClick={() => {
          navigate("/About");
        }}
      >
        About
      </a>
      <a
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
