import { Col, Row, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/checkout.css';
import { removeAll, selectAllOrders, totalCost } from '../orderSlice';
import main from '../assets/main.jpg';

const Checkout = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);
  const total = useSelector(totalCost);
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  return (
    <div style={{ height: '100vh' }}>
      <HeaderOrder />
      <img className='checkout-main-img' src={main} alt='burger' />
      <div id='checkout-container'>
        <Row style={{ width: '100%' }}>
          <Col>
            {orders.map((order) => (
              <div className='food-item' key={order.itemNumber}>
                <div className='food-info'>
                  <p>
                    {order.itemNumber}.-{' '}
                    <span className='title-info'>{order.title.slice(0, order.title.length - 1)}</span>
                  </p>
                  <p>${order.price}</p>
                </div>

                <ul className='ingredient-list'>
                  {order.options.map(
                    (ingredient) =>
                      ingredient.added && (
                        <li className='ingredients' key={ingredient.id}>
                          {ingredient.title}
                        </li>
                      )
                  )}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Subtotal: {total}</p>
            <p>Tax: {(total * 0.12).toFixed(2)}</p>
            <p>Total: {(total + total * 0.12).toFixed(2)}</p>
            <Button type='button' className='btn btn-danger' onClick={handleRemoveAll}>
              Remove items
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;
