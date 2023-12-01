import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/checkout.css';
import { removeItem, updateItem, selectAllOrders, totalCost } from '../orderSlice';
import main from '../assets/main.jpg';
import CheckoutInfo from '../components/checkoutInfo';

const Checkout = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);
  const total = useSelector(totalCost);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdated = (id) => {
    dispatch(updateItem(id));
  };

  const titles = {
    BURGERS: 'BURGER',
    DOGS: 'DOG',
    DRINKS: 'DRINK',
    FRIES: 'FRIES',
    MILKSHAKES: 'MILKSHAKE',
    SANDWICHES: 'SANDWICH',
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
                  <div className='d-flex w-50 justify-content-between'>
                    <p>
                      <span className='title-info'>{titles[order.title]}</span>
                    </p>
                    <p>${order.price}</p>
                  </div>

                  <div>
                    <Button className='btn btn-danger me-3' onClick={() => handleRemove(order.id)}>
                      Remove
                    </Button>
                    <Link to={`../order/${order.title.toLowerCase()}_${order.id}`}>
                      <Button className='btn btn-warning' onClick={() => handleUpdated(order.id)}>
                        Update
                      </Button>
                    </Link>
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
