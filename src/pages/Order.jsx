import { Row } from 'reactstrap';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import FoodOptions from '../components/FoodOptions';
import checkoutImage from '../assets/checkoutImage.png';
import '../styles/order.css';

const Order = () => {
  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='subheader-image'>
        <img src={checkoutImage} alt='burger image' />
      </Row>
      <FoodOptions />
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
