import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx"; // adjust path if needed
import Footer from "./Components/Footer/Footer.jsx"; // if/when you make one
import {navBarContent, menuPics} from './Services/ContentService.jsx';
import MenuPage from "./Pages/MenuPage/MenuPage.jsx";
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar prop={navBarContent}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<MenuPage props={menuPics}/>} />
          {/* Future pages like About, Contact, etc. */}
        </Routes>
        <Footer prop={navBarContent} />
      </Router>
    </div>
  );
}

export default App;
