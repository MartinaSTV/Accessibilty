import massagevid from "../assets/Massage.mp4";

const Video = () => {
  const transcript = () => {
    console.log("hej");
  };
  return (
    <section>
      <h2>Videon visar hur en massage kan gå till</h2>
      <video
        width="320"
        height="240"
        controls
        src={massagevid}
        type="video/mp4"
        onPlay={transcript}
      ></video>
    </section>
  );
};
export default Video;
