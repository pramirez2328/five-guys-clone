import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='md' fixed='top' bg='white'>
        <NavbarToggler onClick={toggle} />
        <Collapse className='flex-grow-0' isOpen={isOpen} navbar>
          <Nav className='me-auto ' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/menu'>Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/locations'>Locations</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand href='/'>
          <img id='logo' src={logo} alt='logo' />
        </NavbarBrand>
        <a href='/order'>
          <Button className='order-now' color='danger'>
            Order Now
          </Button>
        </a>
      </Navbar>
    </div>
  );
}

export default Header;
