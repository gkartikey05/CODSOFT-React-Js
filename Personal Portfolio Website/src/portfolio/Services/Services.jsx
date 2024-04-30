import "./Services.css";

import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services" id="services">
      <Fade direction="left" triggerOnce={true}>
        <h2 className="headinng">
          My <span>Services</span>
        </h2>
      </Fade>

      <Fade direction="right" triggerOnce={true}>
        <div className="services-container">
          <div className="services-box">
            <FontAwesomeIcon className="icon" icon={faCode} />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo, eos magnam voluptatibus, fuga ratione
              consequuntur dolorem tenetur ducimus fugiat nostrum maiores
              deserunt quibusdam? Laboriosam.
            </p>
            <Link to="/#" className="btn">
              Read more
            </Link>
          </div>

          <div className="services-box">
            <FontAwesomeIcon className="icon" icon={faPalette} />
            <h3>UI/UX Designing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo, eos magnam voluptatibus, fuga ratione
              consequuntur dolorem tenetur ducimus fugiat nostrum maiores
              deserunt quibusdam? Laboriosam.
            </p>
            <Link to="/#" className="btn">
              Read more
            </Link>
          </div>

          <div className="services-box">
            <FontAwesomeIcon className="icon" icon={faAndroid} />
            <h3>App Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo, eos magnam voluptatibus, fuga ratione
              consequuntur dolorem tenetur ducimus fugiat nostrum maiores
              deserunt quibusdam? Laboriosam.
            </p>
            <Link to="/#" className="btn">
              Read more
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Services;
