import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png';
import logo from '../assets/logo.png';
import '../styles/header.css';

function HeaderOrder({ counter }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar expand='md' fixed='top' bg='white'>
        <NavbarToggler onClick={toggle} />
        <Collapse className='flex-grow-0 nav-links' isOpen={isOpen} navbar>
          <Nav className='me-auto w-100' navbar>
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
        <div className='cart-container d-flex justify-content-end align-items-center'>
          <div id='cart-icon' className='me-3'>
            <img className='w-100' src={cart} alt='cart icon' />
          </div>
          <h4 className='mt-2 me-3'>{counter}</h4>
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderOrder;
