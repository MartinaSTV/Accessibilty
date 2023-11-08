import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headern from "../Components/Headern";
import "../Sass/Home.scss";
import info from "../assets/data.json";
import { useEffect, useState } from "react";
import Treatments from "../Components/Treatments";
import Video from "../Components/video";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Home = () => {
  const [showMassage, setShowMassage] = useState(false);
  const [showVax, setShowVax] = useState(false);
  const [showBrows, setShowBrows] = useState(false);
  const [massages, setMassages] = useState([]);
  const [brows, setBrows] = useState([]);
  const [vax, setVax] = useState([]);

  const breadcrumbs = useBreadcrumbs();

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
    <main className="home">
      <Headern />
      <Navbar />
      <section className="home__section">
        <button className="home__buttonBook">
          <a
            className="home__buttonBookLink"
            href="https://www.bokadirekt.se/places/lerums-massage-hudvard-49166"
            title="Link to booking paga"
          >
            Boka Direkt!
          </a>
        </button>
        <h1>Massage & hudvård</h1>
        <article className="home__text">
          <h2>
            Varför inte stanna upp ett tag och unna dig en välbehövlig massage
            eller hudvårdsbehandling?
          </h2>
          <p>
            Lerums Massage och Hudvård kan erbjuda dig olika typer av
            behandlingar, utifrån dina egna behov och önskemål.
          </p>
          <p>
            Förutom olika hudvårdsbehandlingar såsom rengöring, färgning av
            fransar och bryn arbetar jag med vanlig förebyggande massage men
            även massagebehandlingar vid värk eller stelhet i kroppen.
          </p>
          <button
            className="home__buttonInfo"
            onClick={() => {
              setShowMassage(!showMassage);
              setShowVax(false);
              setShowBrows(false);
            }}
          >
            {!showMassage ? "Läs mer om massage" : "Stäng stycke om massage"}
          </button>
          <button
            className="home__buttonInfo"
            onClick={() => {
              setShowVax(!showVax);
              setShowBrows(false);
              setShowMassage(false);
            }}
          >
            Läs mer om Vaxning
          </button>
          <button
            className="home__buttonInfo"
            onClick={() => {
              setShowBrows(!showBrows);
              setShowMassage(false);
              setShowVax(false);
            }}
          >
            Läs mer om Bryn
          </button>
          {showMassage ? massage : null}
          {showMassage ? (
            <section>
              <p className="home__oilsText">Läs mer om weledas oljor</p>

              <button
                className="home__buttonLink"
                title="link to weleda webpage"
              >
                <a
                  className="home__buttonLinkA"
                  href="https://www.weleda.se/kropp/kroppsolja"
                >
                  Weleda Oils
                </a>
              </button>
            </section>
          ) : null}
          {showVax ? vaxing : null}
          {showBrows ? browes : null}
        </article>
      </section>
      <Video />
      <Fragment>{breadcrumbs.map(({ breadcrumb }) => breadcrumb)}</Fragment>
      <Footer />
    </main>
  );
};
export default Home;
