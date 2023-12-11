import { useState, useEffect, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, Button, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='header' ref={node}>
      <Navbar expand='md' fixed='top' bg='white' className='m-0'>
        <NavbarToggler onClick={toggle} />

        <Link to='/order'>
          <Button className='order-now' color='danger'>
            Order Now
          </Button>
        </Link>
        <Link to='/' className='header-links mt-2 me-4'>
          <h1 className='logo'>FOUR GUYS</h1>
        </Link>
        <Collapse className='flex-grow-0' isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/' className='header-links me-4'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/menu' className='header-links me-4'>
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/locations' className='header-links'>
                Locations
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
