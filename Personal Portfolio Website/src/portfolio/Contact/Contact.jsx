import "./Contact.css";

import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Fade direction="left" triggerOnce={true}>
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
      </Fade>

      <Fade direction="right" triggerOnce={true}>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Mobile Number" required />
            <input type="text" placeholder="Email Subject" required />
          </div>

          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </Fade>
    </section>
  );
}

export default Contact;
