import { useState } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/checkout.css';
import { removeItem, updateItem, selectAllOrders, totalCost, removeAllItems } from '../orderSlice';
import main from '../assets/main.jpg';
import CheckoutInfo from '../components/CheckoutInfo';
import Thankyou from '../components/Thankyou';
import { titles } from '../util/foodTitles';

const Checkout = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const [finalOrder, setFinalOrder] = useState([]);
  const orders = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  const total = useSelector(totalCost);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdated = (id) => {
    dispatch(updateItem(id));
  };

  const handlePlaceOrder = () => {
    setPlaceOrder(!placeOrder);
    setFinalOrder(orders);
    dispatch(removeAllItems([]));
  };
  console.log(orders);

  if (!placeOrder) {
    return (
      <div className='w-100'>
        <div>
          <HeaderOrder />
          <img className='checkout-main-img' src={main} alt='burger' />
          <div className='w-50 m-auto'>
            <Row>
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
                  <p className='fw-bold total-price'>Total: {(total + total * 0.12).toFixed(2)}</p>
                  {orders.length === 0 && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p className='text-danger'>You're missing the best burgers in the world, add one to the cart!</p>
                  )}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <CheckoutInfo handlePlaceOrder={handlePlaceOrder} finalOrder={orders.length} />
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <Thankyou orders={finalOrder} />;
  }
};
export default Checkout;
