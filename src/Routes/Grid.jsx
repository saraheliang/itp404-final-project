import { Row, Col } from "react-bootstrap";
import WorkCard from "../Components/WorkCard";

export default function Grid(props) {
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
            <WorkCard
              image={props.images[idx]}
              title={props.titles[idx]}
              description={props.descriptions[idx]}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
