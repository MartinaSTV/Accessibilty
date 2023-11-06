import cat from "../assets/catScarf.jpg";
import "../Sass/Error.scss";
const Error = () => {
  return (
    <section className="error">
      <h1>Error</h1>
      <p>Could not navigate</p>
      <img src={cat} alt="Cat in yellow scarf mjauing" className="error__cat" />
    </section>
  );
};
export default Error;
