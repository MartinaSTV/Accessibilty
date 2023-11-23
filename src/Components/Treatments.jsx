import "../Sass/Treatments.scss";
import underline from "../assets/shortUnderline.jpg";

const Treatments = ({ info }) => {
  return (
    <article className="treatments">
      <h2 className="treatments__title">{info.treatment}</h2>
      <section className="treatments__info">
        <p className="treatments__time">
          Tid: <span className="treatments__bold">{info.Time}</span>
        </p>
        <p className="treatments__prise">
          {" "}
          Pris: <span className="treatments__bold">{info.prise} kr</span>
        </p>
      </section>
      <p>{info.info}</p>
      <img className="treatments__underline" src={underline} alt="" />
    </article>
  );
};
export default Treatments;
