import { useState } from 'react';
import { Col, Row, Button } from 'reactstrap';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import checkoutImage from '../assets/checkoutImage.png';
import nutrition1 from '../assets/nutrition1.png';
import nutrition2 from '../assets/nutrition2.png';
import nutrition3 from '../assets/nutrition3.png';
import { foodInformation } from '../util/foodInformation';

import '../styles/menu.css';
const Menu = () => {
  const [nutrition, setNutrition] = useState(false);

  return (
    <>
      <Header />
      <Row>
        <Col>
          <img className='menu-image' src={checkoutImage} alt='menu' />
        </Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col className='mx-5'>
          <h6 className='text-muted menu-subtitle'>
            <b>Five Guys&apos;</b> passion for food is shared with our fans, which is why we never compromise. <br />
            Fresh ingredients hand-prepared that satisfy your craving.
          </h6>
        </Col>
      </Row>
      <Row className='container m-auto mt-5 d-flex align-items-center'>
        {foodInformation.map((item) => {
          return (
            <Col
              key={item.id}
              sm='6'
              md='4'
              className='food-items d-flex flex-column align-items-center justify-content-center mt-2'
            >
              <Modal currenItem={item}>
                <img className='p-0' src={item.icon} alt='burger icon' />
                <p className='text-center'>{item.title}</p>
              </Modal>
            </Col>
          );
        })}
      </Row>
      <Row className='d-flex flex-column justify-content-center align-items-center mt-5 p-2'>
        <Button color='danger' className='guide col-10 col-md-6 m-auto mb-4' onClick={() => setNutrition(!nutrition)}>
          Five Guys Ingredient & Allergen Guide
        </Button>
        {nutrition && (
          <>
            <img src={nutrition1} />
            <img src={nutrition2} />
            <img src={nutrition3} />
          </>
        )}
      </Row>

      <Footer />
    </>
  );
};

export default Menu;
