import { Col, Row, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/checkout.css';
import { selectAllOrders, totalCost } from '../orderSlice';
import main from '../assets/main.jpg';
import CheckoutInfo from '../components/checkoutInfo';

const Checkout = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);
  const total = useSelector(totalCost);

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
                  <div>
                    <Button className='btn btn-danger me-3'>Remove</Button>
                    <Button className='btn btn-warning'>Update</Button>
                  </div>
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
            <div className='d-flex flex-column align-items-end'>
              <h3 className='fw-bold'>Order Summary</h3>
              <p>Subtotal: {total.toFixed(2)}</p>
              <p>Tax: {(total * 0.12).toFixed(2)}</p>
              <p className='fw-bold' style={{ color: '#AA0000' }}>
                Total: {(total + total * 0.12).toFixed(2)}
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <CheckoutInfo />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};
export default Checkout;
