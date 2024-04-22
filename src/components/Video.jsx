import video from "../assets/seats.jpeg";

function Video(props) {
  return (
    <div style={{ backgroundImage: `url(${video})` }} className="video"></div>
  );
}

export default Video;
