import "./About.css";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import AboutPhoto from "../../assets/About-Picture.jpg";

function About() {
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
    <section className="about" id="about">
      <Fade direction="left" triggerOnce={true}>
        <div className="about-img">
          <img src={AboutPhoto} alt="" />
        </div>
      </Fade>

      <Fade direction="right" triggerOnce={true}>
        <div className="about-content">
          <h2 className="heading">
            ABOUT <span>ME</span>
          </h2>
          <h3>
            {text}
            <Cursor />
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
          <Link to="/#" className="btn">
            Read more
          </Link>
        </div>
      </Fade>
    </section>
  );
}

export default About;
