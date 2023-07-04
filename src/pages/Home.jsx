import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from 'reactstrap';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='w-100'>
      <Header />
      <div id='main-section'>
        <div id='main-title'>
          <h3 className='text-light text-center'>Handcrafted</h3>
          <h1 className='text-light'>BURGERS & FRIES</h1>
          <h3 className='text-light  text-center'>since 1986</h3>
          <div className='d-flex justify-content-center'>
            <a href='/order'>
              <Button className='order-now' color='danger'>
                Order Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
