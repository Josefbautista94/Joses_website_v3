import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import '/index.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        {/* Add other routes like /projects /about /contact later */}
      </Routes>
    </Router>
  );
}

export default App;
