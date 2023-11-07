import massagevid from "../assets/Massage.mp4";

const Video = () => {
  return (
    <section>
      <h2>Videon visar hur en massage kan gå till</h2>
      <video width="320" height="240" controls>
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
