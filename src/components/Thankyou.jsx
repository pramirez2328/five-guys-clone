import Header from './header';
import main from '../assets/main.jpg';
import Footer from './Footer';

const Thankyou = () => {
  return (
    <div className='vh-100'>
      <Header />
      <img src={main} alt='main image' style={{ height: '50%', width: '50%' }} />
      <div className='fixed-bottom'>
        <Footer />
      </div>
    </div>
  );
};

export default Thankyou;
