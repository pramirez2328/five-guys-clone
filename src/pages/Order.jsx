import { Row } from 'reactstrap';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import FoodOptions from '../components/FoodOptions';
import { addItem } from '../orderSlice';
import { useSelector } from 'react-redux';
import { selectAllFood } from '../foodSlice';
import { useDispatch } from 'react-redux';
import '../styles/order.css';

const Order = () => {
  const food = useSelector(selectAllFood);
  const dispatch = useDispatch();

  const handleAddItem = (id) => {
    const tempIng = food.filter((i) => i.id == id);
    dispatch(addItem(tempIng));
  };

  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='brake-line' />
      <Row>{/* <p className='m-0'>ITEM ADDED!</p> */}</Row>
      <FoodOptions food={food} handleAddItem={handleAddItem} />
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
