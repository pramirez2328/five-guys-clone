import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar expand='md' fixed='top' bg='white'>
        <NavbarToggler onClick={toggle} />

        <Link to='/order'>
          <Button className='order-now' color='danger'>
            Order Now
          </Button>
        </Link>
        <Link to='/' className='header-links mt-2'>
          <h1 className='logo'>FOUR GUYS</h1>
        </Link>
        <Collapse className='flex-grow-0' isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <Link to='/' className='header-links me-4'>
              Home
            </Link>
            <Link to='/menu' className='header-links me-4'>
              Menu
            </Link>
            <Link to='/locations' className='header-links'>
              Locations
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
