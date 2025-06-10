
import "./Video.css"; // Import your custom CSS for styling

function Video({video}) {
  return (
    <div className="video">

      {<video loop muted autoPlay>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
    </div>
  );
}
export default Video;