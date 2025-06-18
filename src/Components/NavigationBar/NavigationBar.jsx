import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavigationBar.css"; // Import your custom CSS for styling
import logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Add this import


function MyNavbar({prop}) {

const [isMobile, setIsMobile] = useState(false);

const closeMobileMenu = () => {
  const toggler= document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (toggler && navbarCollapse.classList.contains('show')) {
    toggler.click();
  }
}

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth <= 990);
  }

  checkScreen(); // Check on initial load
  window.addEventListener('resize', checkScreen); // Check on resize
   return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Navbar expand="lg" className="my-navbar">
      <Container className="container">
        <Navbar.Brand as={Link} to="/" href="#home" onClick={() => {closeMobileMenu(); window.scrollTo({top:0, behaviour: 'smooth'})}}>
          <img src={logo} alt="Burger Logo" className="logo" />
        </Navbar.Brand>

        {/* Button appears on mobile */}
        {isMobile && (
          <Button variant="outline-dark" className="ms-auto my-button" style={{ marginRight: "20px" }} onClick={closeMobileMenu}>
            Order & Collect
          </Button>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "20px" }} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto my-nav-links" onClick={closeMobileMenu}>
           
            <Nav.Link as={Link} to="/Menu" onClick={() => {closeMobileMenu(); window.scrollTo({top:0, behaviour: 'smooth'})}}>{prop.item1} </Nav.Link>
            <Nav.Link href="#locations" onClick={closeMobileMenu}>{prop.item2} </Nav.Link>
            <Nav.Link href="#story" onClick={closeMobileMenu}>{prop.item3}</Nav.Link>
            <Nav.Link href="#contact" onClick={closeMobileMenu}>{prop.item4}</Nav.Link>
            {!isMobile && (
              <Button variant="outline-dark" className="ms-3 my-button">
                Order & Collect
              </Button>
            )}
            <div className='social-on-bar'>
              {prop.social1}
            {prop.social2}
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
