import "../Sass/Header.scss";
import border from "../assets/UnderlineNew.jpg";

const Headern = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lerums Massage & Hudvård</h1>
      <img src={border} alt="" className="header__border" />
    </header>
  );
};
export default Headern;
