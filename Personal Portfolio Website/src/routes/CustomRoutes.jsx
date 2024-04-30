import { Route, Routes } from "react-router-dom";

import About from "../portfolio/About/About";
import Contact from "../portfolio/Contact/Contact";
import Home from "../portfolio/Home/Home";
import Portfolio from "../portfolio/Portfolio";
import Projects from "../portfolio/Project/Projects";
import Services from "../portfolio/Services/Services";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/#home" element={<Home />} />
      <Route path="/#about" element={<About />} />
      <Route path="/#services" element={<Services />} />
      <Route path="/#projects" element={<Projects />} />
      <Route path="/#contact" element={<Contact />} />
    </Routes>
  );
}

export default CustomRoutes;
