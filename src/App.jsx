import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add other routes like /projects /about /contact later */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
