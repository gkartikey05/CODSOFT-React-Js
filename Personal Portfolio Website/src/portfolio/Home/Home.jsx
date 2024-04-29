import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

import ProfilePhoto from '../../assets/Profile-Picture.jpg';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Kartikey Gupta</h1>
        <h3>And I am a <span>Full-Stack Developer</span></h3>
        <p>
          I am Kartikey Gupta, a Mechanical Engineering student at Technocrats Group of Institutions, with a Full-Stack Web Development course as MERN Stack Developer from PW Skills.
          <br />
          <br />
          My tech skills include languages such as JavaScript, React.js, Express.js, and Node.js. Additionally, I have experience Data Structures & Algorithms and Database Management System during the learning phase of my Web Development.
          <br />
          <br />
          Thank you for visiting my profile, and I look forward to connecting with you!
        </p>
        <div className="social-media">
          <Link to='/'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
          <Link to='/'><FontAwesomeIcon icon={faGithub} /></Link>
          <Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to='/'><FontAwesomeIcon icon={faTwitter} /></Link>
        </div>
        <Link to='/#' className='btn'>SEE RESUME</Link>
      </div>

      <div className="home-img">
        <img src={ProfilePhoto} alt="" />
      </div>
    </section>
  )
}

export default Home;