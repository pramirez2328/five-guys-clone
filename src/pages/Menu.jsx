import { Col, Row, NavLink, Button } from 'reactstrap';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import menuImage from '../assets/menu.png';
import { foodInformation } from '../util/foodInformation';
import '../styles/menu.css';
const Menu = () => {
  return (
    <div className='w-100'>
      <Header />
      <Row>
        <Col>
          <img className='menu-image' src={menuImage} alt='menu' />
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
      <Row className='container m-auto mt-5'>
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

        <Row>
          <Col className='d-flex justify-content-center my-5'>
            <NavLink href='https://www.fiveguys.com/-/media/public-site/files/allergen-ingredients-and-nutrition-info/five-guys-us-nutrition-allergen-guide-february-2023.ashx'>
              <Button color='danger' className='guide'>
                Five Guys Ingredient & Allergen Guide
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Row>
      <Footer />
    </div>
  );
};

export default Menu;
