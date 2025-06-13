import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx"; // adjust path if needed
import Footer from "./Components/Footer/Footer.jsx"; // if/when you make one
import {navBarContent} from './Services/ContentService.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Future pages like About, Contact, etc. */}
        </Routes>
        <Footer prop={navBarContent} />
      </Router>
    </div>
  );
}

export default App;
