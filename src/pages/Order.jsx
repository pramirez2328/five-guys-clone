import { Col, Row, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import { foodInformation } from '../util/foodInformation';
import { useLocation } from 'react-router-dom';
import '../styles/order.css';

const Order = () => {
  console.log(useLocation());
  const counter = useLocation()?.state?.data || 0;
  console.log('here', counter);
  const [counterItems, setCounterItems] = useState(counter);
  const [show, setShow] = useState(false);
  const handleCounter = () => {
    setCounterItems(counterItems + 1);
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
      <Row className='d-flex justify-content-evenly align-items-center w-75 m-auto'>
        {foodInformation.map((item) => {
          return (
            <div key={item.id} id='card' className='p-4 col-sm-6 col-md-4 p-md-3 p-lg-5 mt-4'>
              <Card className='p-3'>
                <CardBody className='text-center'>
                  <CardImg src={item.icon} className='w-100 title' />
                  <CardTitle className='title mt-2'>{item.title}</CardTitle>
                  <CardText className='price b'>$ {item.price}</CardText>
                </CardBody>
                {!show && (
                  <Button className='btn btn-danger' onClick={handleCounter}>
                    ADD
                  </Button>
                )}

                {show && (
                  <Link to={`/order/ingredients/${item.title.toLowerCase()}`} state={{ data: counterItems }}>
                    <Button className='btn btn-danger w-100'>ADD INGREDIENTS</Button>
                  </Link>
                )}
              </Card>
            </div>
          );
        })}
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Order;
