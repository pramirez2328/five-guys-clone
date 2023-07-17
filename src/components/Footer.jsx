import { Container, Row, Col } from 'reactstrap';
import googleIcon from '../assets/google.png';
import appStoreIcon from '../assets/appStore.png';
import '../styles/footer.css';
const Footer = () => {
  return (
    <footer className='footer bg-black mt-5'>
      <Container>
        <Row>
          <Col className='text-center my-5'>
            <h1>FIVE GUYS</h1>
            <a className='btn btn-social-icon btn-instagram mx-1' href='http://instagram.com/'>
              <i className='fa fa-instagram' />
            </a>
            <a className='btn btn-social-icon btn-facebook  mx-1' href='http://www.facebook.com/'>
              <i className='fa fa-facebook' />
            </a>
            <a className='btn btn-social-icon btn-twitter mx-1' href='http://twitter.com/'>
              <i className='fa fa-twitter' />
            </a>
            <a className='btn btn-social-icon btn-google mx-1' href='http://youtube.com/'>
              <i className='fa fa-youtube' />
            </a>
          </Col>
          <Col className='my-5'>
            <a href='https://play.google.com/store/apps/details?id=com.fiveguys.olo.android&hl=en_US&pli=1'>
              <img id='google-app' src={googleIcon} alt='google icon' />
            </a>

            <a href='https://apps.apple.com/us/app/five-guys-burgers-fries/id457494327'>
              <img id='appStore-app' src={appStoreIcon} alt='app store icon' />
            </a>
          </Col>
        </Row>
      </Container>
      <h6 className='bottom-footer mb-0'>
        Proudly made by <span>Pedro Ramirez</span> &copy; 2023
      </h6>
    </footer>
  );
};

export default Footer;
