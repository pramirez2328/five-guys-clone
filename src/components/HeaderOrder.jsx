import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png';
import logo from '../assets/logo.png';
import '../styles/header.css';

function HeaderOrder() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
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
        <div className='cart-container d-flex justify-content-between align-items-center'>
          <div id='cart-icon'>
            <img className='w-100' src={cart} alt='cart icon' />
          </div>
          <h4 className='mt-2'>0</h4>
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderOrder;
