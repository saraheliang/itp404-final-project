import Grid from "./Grid";
import { Card } from "react-bootstrap";
import matchaImage from "../Assets/spotlight.png";

export default function About() {
  const placeholderImages = [matchaImage, matchaImage];
  const titles = ["Matcha shop", "My top show"];

  const matchaDescription = "culinary grade and rich matcha";
  const showDescription = "insightful and beautiful animation";
  const descriptions = [matchaDescription, showDescription];
  return (
    <div>
      <h1>about me</h1>
      <p>these spark joy!</p>
      <br></br>
      <h1>"Sparks Joy" wall</h1>
      <h3>
        Recs for movies/shows, recipes, music, outdoor-sy activities, matcha
        shops, study spots, places to explore (currently in LA and looking to
        take trips abroad to Japan and China soon)
      </h3>
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
      <button className="btn btn-primary" type="button">
        Add a rec!
      </button>
    </div>
  );
}
