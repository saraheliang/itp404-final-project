import { Card } from "react-bootstrap";

export default function Post() {
  return (
    <>
      {/* should be able to comment, like/star, edit, delete, add */}
      <Card>
        <Card.Body>
          <Card.Title>Matcha shop</Card.Title>
          <Card.Text>Culinary grade and rich matcha</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
