import "../Sass/Treatments.scss";
import underline from "../assets/shortUnderline.jpg";

const Treatments = ({ info }) => {
  return (
    <article className="treatments">
      <h2 className="treatments__title">{info.treatment}</h2>
      <p className="treatments__time">Tid: {info.Time}</p>
      <p className="treatments__prise"> Pris: {info.prise} kr</p>
      <p>{info.info}</p>
      <img className="treatments__underline" src={underline} alt="" />
    </article>
  );
};
export default Treatments;
