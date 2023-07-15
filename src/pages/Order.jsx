import {
  Container,
  Col,
  Row,
  NavLink,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import '../styles/order.css';
import HeaderOrder from '../components/HeaderOrder';

import { foodInformation } from '../util/foodInformation';
const Order = () => {
  return (
    <div className='order-container'>
      <Row>
        <Col>
          <HeaderOrder />
        </Col>
      </Row>
      <Row className='brake-line'></Row>
      <Row className='d-flex justify-content-evenly align-items-center w-75 m-auto'>
        {foodInformation.map((item) => {
          return (
            <div key={item.id} id='card' className='p-4 col-sm-6 col-md-4 p-md-3 p-lg-4 mt-4'>
              <Card className='p-3'>
                <CardBody className='text-center'>
                  <CardImg src={item.icon} className='w-100 title' />
                  <CardTitle className='title mt-2'>{item.title}</CardTitle>
                  <CardText className='price b'>$ {item.price}</CardText>
                </CardBody>
                <Button className='btn btn-danger'>ADD</Button>
              </Card>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Order;
