import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headern from "../Components/Headern";
import "../Sass/Home.scss";
import info from "../assets/data.json";
import { useState } from "react";
import Treatments from "../Components/Treatments";

const Home = () => {
  const [show, setShow] = useState(false);

  const massage = info.map((info, index) => (
    <Treatments key={index} info={info} />
  ));

  return (
    <main className="home">
      <Headern />
      <Navbar />
      <section className="home__section">
        <button className="home__button">
          <a
            href="https://www.bokadirekt.se/places/lerums-massage-hudvard-49166"
            title="Link to booking paga"
          >
            Boka Direkt!
          </a>
        </button>
        <h1>Massage & skincare</h1>
        <article className="home__text">
          <p>
            Varför inte stanna upp ett tag och unna dig en välbehövlig massage
            eller hudvårdsbehandling?
          </p>
          <p>
            Lerums Massage och Hudvård kan erbjuda dig olika typer av
            behandlingar, utifrån dina egna behov och önskemål. Förutom olika
            hudvårdsbehandlingar såsom rengöring, färgning av fransar och bryn
            arbetar jag med vanlig förebyggande massage men även
            massagebehandlingar vid värk eller stelhet i kroppen.
          </p>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Read More about Massage
          </button>
          {show ? massage : null}
          {show ? (
            <section>
              <p className="home__oilsText">Read more about our Oils</p>

              <button
                className="home__buttonLink"
                title="link to weleda webpage"
              >
                <a href="https://www.weleda.se/kropp/kroppsolja">Weleda Oils</a>
              </button>
            </section>
          ) : null}
          <button>Read more about vax</button>
          <button>Read more abbout Lasches and brows</button>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
