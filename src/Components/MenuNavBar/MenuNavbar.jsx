import { Navbar, Nav } from 'react-bootstrap';
import './MenuNavbar.css'
export function MenuNavBar({ props }) {
    return (
        <Navbar expand="lg" className="my-navbar-menu justify-content-center">
            <div style={{ overflowX: 'auto', width: '100%' }}>
                <Nav className=" justify-content-center w-100 flex-row ">
                 {props.map((prop, idx) => (
                <Nav.Link key={idx} href={prop.href}>
                    {prop.item}
                </Nav.Link>
            ))}
            </Nav>
            </div>
            
           
           
        </Navbar>
    );
}

export default MenuNavBar;