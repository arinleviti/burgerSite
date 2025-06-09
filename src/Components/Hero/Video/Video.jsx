import video from "../../../assets/making-burger.mp4";
import "./Video.css"; // Import your custom CSS for styling

function Video() {
  return (
    <div className="video">

      {<video loop muted autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
    </div>
  );
}
export default Video;