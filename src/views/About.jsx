import Navbar from "../Components/Navbar";
import Headern from "../Components/Headern";
import massagevid from "../assets/Massage.mp4";
const About = () => {
  return (
    <article>
      <Headern />
      <Navbar />
      <h1>About</h1>
      <section>
        <h2>Videon visar hur en massage kan gå till</h2>
        <video
          width="320"
          height="240"
          controls
          src={massagevid}
          type="video/mp4"
          //title=" Massage Video"
        ></video>
      </section>
    </article>
  );
};
export default About;
