import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
