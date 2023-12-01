import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function Header() {
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
          <h1 className='logo'>FOUR GUYS</h1>
        </NavbarBrand>
        <NavLink href='/order'>
          <Button className='order-now' color='danger'>
            Order Now
          </Button>
        </NavLink>
      </Navbar>
    </div>
  );
}

export default Header;
