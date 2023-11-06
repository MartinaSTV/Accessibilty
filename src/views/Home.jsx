import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Headern from "../Components/Headern";
import "../Sass/Home.scss";

const Home = () => {
  return (
    <main className="home">
      <Headern />
      <Navbar />
      <h1>Massage</h1>
      <section className="home__section">
        <article className="home__text">
          Lerum's massage offers Swedish classic massage. Massage has a lot of
          benefits.
          <ul>
            <li>Improved circulation</li>
            <li>Strengthened immune response.</li>
            <li>Relaxation and Calm</li>
          </ul>
          <p>We use natural oils from weleda</p>
        </article>

        <article className="home__oils">
          <p className="home__oilsText">Read more about our Oils</p>
          <button className="home__buttonLink" title="link to weleda webpage">
            <a href="https://www.weleda.se/kropp/kroppsolja">Weleda</a>
          </button>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
