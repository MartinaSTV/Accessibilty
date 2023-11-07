const Treatments = ({ info }) => {
  return (
    <article>
      <h2>{info.treatment}</h2>
      <p>Time:{info.Time}</p>
      <p> Prise: {info.prise}</p>
      <p>{info.info}</p>
    </article>
  );
};
export default Treatments;
