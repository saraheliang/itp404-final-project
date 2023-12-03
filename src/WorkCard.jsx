// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import placeholderImage from "./Assets/mockup.png";
// can you make this card into a cooler ui (maybe a sticky note?) in the future?
export default function WorkCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={placeholderImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
