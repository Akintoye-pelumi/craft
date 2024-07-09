// import React from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import search from '../Assets/Vector.png'


// const Navbar = () => {
//   return (
//     <div className='navbar'>
//     <div className="nav-logo">
//         <img src={logo} alt=''/>
//         <p>Craft</p>
//     </div>
//     <div >
//         <ul className="nav-menu">
//             <li>Home</li>
//             <li>Contact Us</li>
//             <li>Shop</li>
//             <li>About</li>
//         </ul>
//     </div>
//     <div className="nav-search">
//         <img src={search} alt=''/>
//         <p>search</p>
//     </div>
//     <div className="nav-login">

//     </div>
      
//     </div>
//   )
// }

// export default Navbar
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import logo from '../Assets/logo.png'
import './Navbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-light navbar">
      <Container>
        <img src={logo}  />
        <Navbar.Brand href="#" className="logo-name">Craft</Navbar.Brand>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success"> <CiShoppingCart /> <CiUser /></Button> */}
            <div className='nav-cart'> <CiShoppingCart />
             <CiUser /></div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;