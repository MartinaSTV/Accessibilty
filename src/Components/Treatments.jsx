const Treatments = ({ info }) => {
  return (
    <article>
      <h2>{info.treatment}</h2>
      <p>Tid: {info.Time}</p>
      <p> Pris: {info.prise}</p>
      <p>{info.info}</p>
    </article>
  );
};
export default Treatments;
