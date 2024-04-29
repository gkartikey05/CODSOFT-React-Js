import './About.css';

import { Link } from "react-router-dom";

import AboutPhoto from '../../assets/About-Picture.jpg';


function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={AboutPhoto} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">ABOUT <span>ME</span></h2>
        <h3>Full-Stack Developer</h3>
        <p>
          I am Kartikey Gupta, a Mechanical Engineering student at Technocrats Group of Institutions, with a Full-Stack Web Development course as MERN Stack Developer from PW Skills.
          <br />
          <br />
          My tech skills include languages such as JavaScript, React.js, Express.js, and Node.js. Additionally, I have experience Data Structures & Algorithms and Database Management System during the learning phase of my Web Development.
          <br />
          <br />
          Thank you for visiting my profile, and I look forward to connecting with you!
        </p>
        <Link to='/#' className='btn'>Read more</Link>
      </div>
    </section>
  )
}

export default About;