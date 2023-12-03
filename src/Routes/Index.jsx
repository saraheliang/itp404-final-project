// import { Link, useLoaderData } from "react-router-dom";
import "../Styling/Index.css";
import profileImage from "../Assets/bunny-rocket.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import Projects from "../Projects";

export default function Index() {
  // const posts = useLoaderData();
  return (
    <>
      <div className="parent index-page d-flex align-items-center">
        <div className="child">
          <h1>
            Hi, I'm <b>Sarah</b>! I'm a <b>software developer</b> interested in
            bridging communities and doing so artistically ✨.
          </h1>
          <p>Currently studying at the University of Southern California.</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/saraheliang/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/saraheliang">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="image d-flex justify-content-center">
          {/* <img src={profileImage} alt="profile" /> */}
          <Image src={profileImage} fluid />
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </>
  );
}
