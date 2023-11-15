import Navbar from "../Components/Navbar";
import NavBurger from "../Components/NavBurger";
import Footer from "../Components/Footer";
import Headern from "../Components/Headern";
import "../Sass/Home.scss";
import Video from "../Components/video";
import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../Components/Breadcrumbs";
import AllTreatments from "../Components/AllTreatments";

const Home = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <main className="home">
      <Headern />
      <section className="home__navbar">
        <Navbar />
      </section>
      <section className="home__section">
        <h1>Massage & hudvård</h1>
        <article className="home__text">
          <h2>
            Varför inte stanna upp ett tag och unna dig en välbehövlig Massage.
          </h2>
          <p>
            Lerums Massage och Hudvård kan erbjuda dig olika typer av
            behandlingar, utifrån dina egna behov och önskemål.
          </p>
          <ul>
            <li>Färgning bryn och Fransar</li>
            <li>Massage och massage vid värk och stelhet</li>
            <li>Vaxning</li>
            <li>Hudvårdsbehandlingar</li>
          </ul>
          <AllTreatments />
        </article>
      </section>
      <Video />
      <Fragment>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Fragment>
      <section className="home__navburger">
        <NavBurger />
      </section>
      <section className="home__footer">
        <Footer />
      </section>
    </main>
  );
};
export default Home;
