import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonal from "./components/Testimonal";
import Blog from "./components/Blog";
import PortfolioItem from "./components/PortfolioItem";
import Footer from "./components/Footer";
 import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonal />
      <Portfolio/>
      <PortfolioItem/>
      <Blog />
      <Contact/>
      <Footer/>
    </div>
  );
};
export default App;
