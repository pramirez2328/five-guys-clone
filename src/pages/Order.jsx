import { Row } from 'reactstrap';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import FoodOptions from '../components/FoodOptions';
import '../styles/order.css';

const Order = () => {
  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='brake-line' />
      <Row>{/* <p className='m-0'>ITEM ADDED!</p> */}</Row>
      <FoodOptions />
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
