import "../Sass/Treatments.scss";

const Treatments = ({ info }) => {
  return (
    <article className="treatments">
      <h2>{info.treatment}</h2>
      <p className="treatments__time">Tid: {info.Time}</p>
      <p className="treatments__prise"> Pris: {info.prise} kr</p>
      <p>{info.info}</p>
    </article>
  );
};
export default Treatments;
