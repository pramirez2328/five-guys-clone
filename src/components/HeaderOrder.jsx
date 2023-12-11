import { useState } from 'react';
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
  let items = useSelector(selectAllOrders);

  return (
    <div className='header-order'>
      <Navbar expand='md' fixed='top' bg='white'>
        <NavbarToggler onClick={toggle} />
        <div className='cart-container d-flex justify-content-end align-items-center'>
          <div id='cart-icon' className='me-3'>
            <img className='w-100' src={cart} alt='cart icon' />
          </div>
          <h4 className='mt-2 me-3'>{items.length}</h4>
        </div>
        <Link to='/' className='mx-2'>
          <h1 className='logo'>FOUR GUYS</h1>
        </Link>

        <Collapse className='flex-grow-0 nav-links' isOpen={isOpen} navbar>
          <Nav className='me-auto w-100' navbar>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/menu'>Menu</Link>
            </NavItem>
            <NavItem>
              <Link to='/locations'>Locations</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderOrder;
