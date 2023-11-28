import { Col, Row, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/checkout.css';
import { removeAll } from '../orderSlice';
const Checkout = () => {
  const dispatch = useDispatch();
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  return (
    <div style={{ height: '100vh' }}>
      <HeaderOrder />
      <div id='checkout-container'>
        <Row>
          <Col>
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
