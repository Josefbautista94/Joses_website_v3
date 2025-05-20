import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import About from "./sections/About/About";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
