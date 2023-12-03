import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Making macarons!</h5>
        <h6 className="card-subtitle mb-2 text-muted">By Sarah</h6>
        <p className="card-text">Some text here describing the project!</p>
        <Link>Read more</Link>
      </div>
    </div>
  );
}
