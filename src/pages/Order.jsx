import { Row } from 'reactstrap';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import FoodOptions from '../components/FoodOptions';
import AddIngredients from '../components/AddIngredients';
import { addItem } from '../orderSlice';
import { useSelector } from 'react-redux';
import { selectAllFood } from '../foodSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../styles/order.css';

const Order = () => {
  const [toggle, setToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);
  const food = useSelector(selectAllFood);
  const dispatch = useDispatch();

  const handleAddItem = (id) => {
    const tempIng = food.filter((i) => i.id == id);
    setCurrentItem(tempIng);
    setToggle(!toggle);
    dispatch(addItem(tempIng));
  };

  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='brake-line' />
      <Row>
        <p className='m-0'>ITEM ADDED!</p>
      </Row>
      {!toggle && <FoodOptions food={food} handleAddItem={handleAddItem} />}
      {toggle && <AddIngredients currentItem={currentItem} />}
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
