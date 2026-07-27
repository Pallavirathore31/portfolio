import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RankSystemCarousel from "./components/RankSystemBlack";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <RankSystemCarousel />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;