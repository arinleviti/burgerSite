import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavigationBar.css"; // Import your custom CSS for styling
import logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";


function MyNavbar({prop}) {

const [isMobile, setIsMobile] = useState(false);

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
        <Navbar.Brand href="#home">
          <img src={logo} alt="Burger Logo" className="logo" />
        </Navbar.Brand>

        {/* Button appears on mobile */}
        {isMobile && (
          <Button variant="outline-dark" className="ms-auto my-button" style={{ marginRight: "20px" }}>
            Order & Collect
          </Button>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "20px" }} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto my-nav-links">
            {prop.item1}
            <Nav.Link href="#locations">{prop.item2}</Nav.Link>
            <Nav.Link href="#story">{prop.item3}</Nav.Link>
            <Nav.Link href="#contact">{prop.item4}</Nav.Link>
            {!isMobile && (
              <Button variant="outline-dark" className="ms-3 my-button">
                Order & Collect
              </Button>
            )}

            {prop.social1}
            {prop.social2}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
