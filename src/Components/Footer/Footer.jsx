import { Navbar, Nav, Container } from 'react-bootstrap';
import './Footer.css'

export function Footer({prop}) {

const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white mt-5 py-3">
      <Container>
        <Navbar expand="md" variant="dark">
          <Nav className="mx-auto custom-buttons">
            <Nav.Link href="#home">{prop.item1}</Nav.Link>
            <Nav.Link href="#locations">{prop.item2}</Nav.Link>
            <Nav.Link href="#story">{prop.item3}</Nav.Link>
            <Nav.Link href="#contact">{prop.item4}</Nav.Link>
            
          </Nav>
        </Navbar>
      <div className="social text-center ">
       <span className="fs-2 me-3">{prop.social1}</span>
  <span className="fs-2">{prop.social2}</span>
      </div>
      <div style={{ fontFamily: "'Noto Mono', monospace" }} className="text-center mt-3 small">
          <a href="/privacy" className="text-white me-3">Privacy Notice</a>
          <span style={{ fontFamily: "'Noto Mono', monospace" }}>&copy; {currentYear} Best Burgers</span>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

