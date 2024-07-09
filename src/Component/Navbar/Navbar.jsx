import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.png'
import './Navbar.css'
import cart from '../Assets/cart.png'
import user from '../Assets/user.png'
import {Link} from 'react-router-dom'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-light navbar">
      <Container>
        <div className="logo-name1">
          <img src={logo}  />
          <Navbar.Brand href="#" className="logo-name">Craft</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#action2"  className="nav-link">Contact Us </Nav.Link>
            <Nav.Link href="#"  className="nav-link">Shop</Nav.Link>
            <Nav.Link href="#"  className="nav-link">About</Nav.Link>
          </Nav>
          <div className='nav-cart'> <Link to='/cart'> <img src={cart}/></Link>  
            <img src={user} /> </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;