import { useState, useEffect, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectAllOrders } from '../orderSlice';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png';
import '../styles/header.css';

function HeaderOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const node = useRef();
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

  let items = useSelector(selectAllOrders);

  return (
    <div className='header' ref={node}>
      <Navbar expand='md' fixed='top' bg='white' className='pe-3 mx-0'>
        <NavbarToggler onClick={toggle} />

        <div className='d-flex justify-content-end align-items-center ml-auto order-button-container'>
          <div id='cart-icon' className='me-3'>
            <img className='w-100' src={cart} alt='cart icon' />
          </div>
          <h4 className='mt-2 me-3'>{items.length}</h4>
        </div>
        <div className='mt-0 logo-container'>
          <Link to='/'>
            <h2>FOUR GUYS</h2>
          </Link>
        </div>

        <Collapse className='flex-grow-0 nav-links' isOpen={isOpen} navbar>
          <Nav className='me-0' navbar>
            <NavItem>
              <Link to='/' className='header-links me-5'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/menu' className='header-links me-5'>
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

export default HeaderOrder;
