import { Image } from "react-bootstrap";
import sunsetImage from "../Assets/sunset.jpg";
import { useEffect } from "react";
import Recommendations from "../Components/Recommendations";

export default function About() {
  // const posts = useLoaderData();
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <div>
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>Learn more about me in the form of how I find joy ✨</h1>
          <p>
            <b>Currently listening to</b> the{" "}
            <i>Hunger Games: Ballad of Songbird & Snakes</i> audiobook & Spotify
            playlist.
          </p>
        </div>
        <div className="sunset-image d-flex justify-content-center">
          <Image src={sunsetImage} fluid />
        </div>
      </div>
      <h1>Recs</h1>
      <p>
        These are my recommendations for all things movies/shows, recipes,
        music, wellness, mindset, outdoor-sy activities, matcha shops, study
        spots, and more.
      </p>
      <Recommendations />
    </div>
  );
}
