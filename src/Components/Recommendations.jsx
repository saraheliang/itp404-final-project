import { Row, Col } from "react-bootstrap";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Recommendations() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a rec!
      </Button>
      <form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                aria-describedby="titleHelp"
              ></input>
              <div id="titleHelp" class="form-text">
                TV shows, hiking spots, new music, etc.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                // value={message}
                // onChange={(event) => {
                //   setMessage(event.target.value.toUpperCase());
                // }}
                aria-describedby="messageHelp"
              />
              <div id="messageHelp" class="form-text">
                Favorite thing about it. More details.
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </form>

      <PostsGrid
        titles={["Matcha Shop", "Matcha Shop2"]}
        descriptions={["descriptions", "description2"]}
      />
    </>
  );
}

function PostsGrid(props) {
  return (
    <>
      <Row
        xs={props.xs ? props.xs : 1}
        md={props.md ? props.md : 2}
        lg={props.lg}
        xl={props.xl}
        className="g-4"
      >
        {Array.from({ length: props.titles.length }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{props.titles[idx]}</Card.Title>
                <Card.Text>{props.descriptions[idx]}</Card.Text>
                {/* DYNAMIC SEGMENT HERE */}
                <Button variant="primary" href="/">
                  See details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
