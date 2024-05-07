import "./Home.css";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import ProfilePhoto from "../../assets/Profile-Picture.jpg";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Web Designer",
      "Freelancer",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  return (
    <section className="home" id="home">
      <Fade direction="down" triggerOnce={true}>
        <div className="home-content">
          <h3>Hi, Myself</h3>
          <h1>Kartikey Gupta</h1>
          <h3>
            And I am a <span>{text}</span>
            <Cursor cursorColor="#59B2F4" />
          </h3>
          <p>
            I am Kartikey Gupta, a Mechanical Engineering student at Technocrats
            Group of Institutions, with a Full-Stack Web Development course as
            MERN Stack Developer from PW Skills.
            <br />
            <br />
            My tech skills include languages such as JavaScript, React.js,
            Express.js, and Node.js. Additionally, I have experience Data
            Structures & Algorithms and Database Management System during the
            learning phase of my Web Development.
            <br />
            <br />
            Thank you for visiting my profile, and I look forward to connecting
            with you!
          </p>
          <div className="social-media">
            <Link to="https://www.linkedin.com/in/gkartikey05" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="https://github.com/gkartikey05" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link to="https://www.facebook.com/kartikeygupta93" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              to="https://www.instagram.com/the_kartikey.gupta"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://x.com/KartikeyGupta_" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
          <Link
            to="https://drive.google.com/file/d/1rWJPyFOs8hTtEaxQca-wP9dpY83cUUhq/view"
            target="_blank"
            className="btn"
          >
            SEE RESUME
          </Link>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce={true}>
        <div className="home-img">
          <img src={ProfilePhoto} alt="" />
        </div>
      </Fade>
    </section>
  );
}

export default Home;
