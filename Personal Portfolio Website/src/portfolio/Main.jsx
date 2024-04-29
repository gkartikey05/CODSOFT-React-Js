import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";

function Main() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Main;