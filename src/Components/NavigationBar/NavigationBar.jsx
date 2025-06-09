import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavigationBar.css"; // Import your custom CSS for styling
import logo from "../../assets/Logo.png";
import React, { useEffect, useState } from "react";

function MyNavbar() {

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
            <Nav.Link href="#menu">MENU</Nav.Link>
            <Nav.Link href="#locations">LOCATIONS</Nav.Link>
            <Nav.Link href="#story">STORY</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            {!isMobile && (
              <Button variant="outline-dark" className="ms-3 my-button">
                Order & Collect
              </Button>
            )}
            <Nav.Link href="#insta" className="icon-link">
              <i style={{ marginLeft: "16px", marginRight: "0px" }} className="bi bi-instagram "></i>
            </Nav.Link>
            <Nav.Link href="#tiktok" className="icon-link">
              <i style={{ marginLeft: "0px", marginRight: "0px" }} className="bi bi-tiktok "></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
