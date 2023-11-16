import { useEffect, useState } from "react";
import Treatments from "../Components/Treatments";
import info from "../assets/data.json";
import "../Sass/AllTreatments.scss";

const AllTreatments = () => {
  const [showMassage, setShowMassage] = useState(false);
  const [showVax, setShowVax] = useState(false);
  const [showBrows, setShowBrows] = useState(false);
  const [massages, setMassages] = useState([]);
  const [brows, setBrows] = useState([]);
  const [vax, setVax] = useState([]);

  useEffect(() => {
    const tempBrows = info.filter((type) => type.type === "brows");
    const tempMassage = info.filter((type) => type.type === "massage");
    const tempVax = info.filter((type) => type.type === "vax");
    setMassages(tempMassage);
    setVax(tempVax);
    setBrows(tempBrows);
  }, []);

  const massage = massages.map((info, index) => (
    <Treatments key={index} info={info} />
  ));
  const browes = brows.map((info, index) => (
    <Treatments key={index} info={info} />
  ));
  const vaxing = vax.map((info, index) => (
    <Treatments key={index} info={info} />
  ));

  return (
    <section className="alTreatments">
      <button
        aria-label="Läs mer buttons"
        className="alTreatments__buttonInfo"
        onClick={() => {
          setShowMassage(!showMassage);
          setShowVax(false);
          setShowBrows(false);
        }}
      >
        {!showMassage
          ? "Läs mer om mina olika massager"
          : "Stäng stycke om massage"}
      </button>
      <button
        aria-label="Läs mer buttons"
        className="alTreatments__buttonInfo"
        onClick={() => {
          setShowVax(!showVax);
          setShowBrows(false);
          setShowMassage(false);
        }}
      >
        {!showVax ? "Läs mer om Vaxning" : "Stäng stycke om Vaxning"}
      </button>
      <button
        aria-label="Läs mer buttons"
        className="alTreatments__buttonInfo"
        onClick={() => {
          setShowBrows(!showBrows);
          setShowMassage(false);
          setShowVax(false);
        }}
      >
        {!showBrows ? "Läs mer om Bryn" : "Stäng stycke om Bryn"}
      </button>
      <section className="alTreatments__Info">
        {showMassage ? massage : null}
      </section>
      {showMassage ? (
        <section>
          <p className="alTreatments__oilsText">Läs mer om weledas oljor</p>

          <button
            className="alTreatments__buttonLink"
            title="link to weleda webpage"
          >
            <a
              className="alTreatments__buttonLinkA"
              href="https://www.weleda.se/kropp/kroppsolja"
            >
              Läs mer om Weleda Oils
            </a>
          </button>
        </section>
      ) : null}
      <section className="alTreatments__Info">
        {showVax ? vaxing : null}
      </section>
      <section className="alTreatments__Info">
        {showBrows ? browes : null}
      </section>
    </section>
  );
};
export default AllTreatments;
