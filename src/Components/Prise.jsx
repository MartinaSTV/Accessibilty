import "../Sass/Prise.scss";
const Prise = () => {
  return (
    <section className="prises">
      <h1 className="prises__title">Prises</h1>
      <article className="prises__prise">
        <p className="prises__priseText">Full body massage 70 min</p>
        <p className="prises__priseP">Pris: 900kr</p>
      </article>
      <article className="prises__prise">
        <p>Half body massage 45 min</p>
        <p className="prises__priseP">Pris: 540kr</p>
      </article>
      <article className="prises__prise">
        <p>Fascial massage 30 min</p>
        <p className="prises__priseP">Pris: 450kr</p>
      </article>
      <article className="prises__prise">
        <p>Luxury massage 80 min</p>
        <p className="prises__priseP">Pris: 1090kr</p>
      </article>
    </section>
  );
};
export default Prise;
