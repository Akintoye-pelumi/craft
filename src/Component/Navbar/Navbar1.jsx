
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.png'
import './Navbar1.css'
import cart from '../Assets/cart.png'
import user from '../Assets/user.png'
import search from '../Assets/search.png'

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-light navbar1">
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
            <Nav.Link href="#about"  className="nav-link">About</Nav.Link>
          </Nav>
          <Form className="d-flex search-bar">
            <div className="search-icon">
              <img src={search} alt='search-icon'/>
            </div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success"> <CiShoppingCart /> <CiUser /></Button> */}
            <div className='nav-cart'> <img src={cart} />
            <img src={user} /> </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;