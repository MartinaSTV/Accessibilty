import massagevid from "../assets/Massage.mp4";
import "../Sass/Video.scss";

const Video = () => {
  return (
    <section className="video">
      <h1>Videon visar hur en massage kan gå till</h1>
      <video controls className="video__video">
        <source src={massagevid} type="video/mp4" />
        <track
          kind="captions"
          src="../Captions.vtt"
          srcLang="en"
          label="English"
          default
        ></track>
      </video>
    </section>
  );
};
export default Video;
