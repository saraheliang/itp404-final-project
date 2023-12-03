import Grid from "./Grid";
import { Card, Image } from "react-bootstrap";
import favMediaImage from "../Assets/favMedia.png";
import sunsetImage from "../Assets/sunset.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "";
    navigate(path);
  };
  return (
    <div>
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>Learn more about me in the form of how I find joy! ✨.</h1>
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
      <button className="btn btn-primary" type="button" onClick={routeChange}>
        Add a rec!
      </button>
      <Card>
        <Card.Body>
          <Card.Title>Matcha shop</Card.Title>
          <Card.Text>Culinary grade and rich matcha</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Matcha shop</Card.Title>
          <Card.Text>Culinary grade and rich matcha</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Matcha shop</Card.Title>
          <Card.Text>Culinary grade and rich matcha</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Matcha shop</Card.Title>
          <Card.Text>Culinary grade and rich matcha</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
