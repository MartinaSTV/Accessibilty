import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headern from "../Components/Headern";
import "../Sass/Home.scss";
import Video from "../Components/video";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../Components/Breadcrumbs";
import AllTreatments from "../Components/AllTreatments";
import NavBurger from "../Components/NavBurger";

const Home = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <main className="home">
      <Headern />
      <section className="home__navbar">
        <Navbar />
      </section>
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
            Varför inte stanna upp ett tag och unna dig en välbehövlig Massage.
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
          <AllTreatments />
        </article>
      </section>
      <Video />
      <Fragment>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Fragment>
      <Footer />
    </main>
  );
};
export default Home;
