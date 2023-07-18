import { Row } from 'reactstrap';
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
  const [addToCart, setAddToCart] = useState('d-none');
  const [order, setOrder] = useState([]);
  const [action, setAction] = useState('ADD');
  const [addIng, setAddIng] = useState('');
  const [show, setShow] = useState(false);

  const handleCounter = (id) => {
    const currentItem = foodInformation.filter((i) => i.id === id).pop();
    setIngredients([currentItem]);
    setCounterItems(counterItems + 1);
    setOrder([...order, { id: currentItem.id, item: currentItem.title, options: [] }]);
    setShow(!show);
    setAddToCart('d-block');
    setTimeout(() => {
      setAddToCart('d-none');
    }, 3000);
  };

  const handleAddAndRemove = (action, id, typeOfIngredient) => {
    if (action === 'ADD') {
      console.log('id', id);
      let currentItem = order.filter((i) => i.id === id);
      console.log('inside', currentItem);
      currentItem[0].options.push(typeOfIngredient);
      let tempOrders = order.filter((i) => i.id !== id);
      setOrder([...tempOrders, ...currentItem]);
      setAddIng(typeOfIngredient);
      setAction('');
    } else {
      let currentItem = order.filter((i) => i.id === id);
      currentItem[0].options.pop();
      let tempOrders = order.filter((i) => i.id !== id);
      setOrder([...tempOrders, ...currentItem]);
      setAddIng('');
      setAction('ADD');
    }
  };

  const handleAddMore = () => {
    setShow(!show);
  };

  console.log('this is the order', order);
  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder counter={counterItems} />
      </Row>
      <Row className='brake-line' />
      <Row className={`add-to-cart ${addToCart}`}>
        <p className='m-0'>ITEM ADDED!</p>
      </Row>
      {!show && <FoodOptions handleCounter={handleCounter} />}
      {show && (
        <AddIngredients
          counter={counterItems}
          currentItem={ingredients}
          handleAddMore={handleAddMore}
          handleAddAndRemove={handleAddAndRemove}
          addIng={addIng}
          action={action}
        />
      )}
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
