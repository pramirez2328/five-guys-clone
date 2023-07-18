import { Col, Row } from 'reactstrap';
import { useState } from 'react';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import FoodOptions from '../components/FoodOptions';
import AddIngredients from '../components/AddIngredients';
import { foodInformation } from '../util/foodInformation';
import '../styles/order.css';

const Order = () => {
  const [counterItems, setCounterItems] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [show, setShow] = useState(false);

  const handleCounter = (id) => {
    const currentItemIngredients = foodInformation.filter((i) => i.id === id).pop();
    setIngredients([currentItemIngredients.options]);
    setCounterItems(counterItems + 1);
    setShow(!show);
  };

  const handleAddMore = () => {
    setShow(!show);
  };

  return (
    <div className='order-container'>
      <Row>
        <Col>
          <HeaderOrder counter={counterItems} />
        </Col>
      </Row>
      <Row className='brake-line'></Row>
      {!show && <FoodOptions handleCounter={handleCounter} />}
      {show && <AddIngredients counter={counterItems} currentItem={ingredients} handleAddMore={handleAddMore} />}
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
