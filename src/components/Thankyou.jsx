import Header from './Header';
import Footer from './Footer';
import { titles } from '../util/foodTitles';
import '../styles/thankyou.css';

const Thankyou = ({ orders }) => {
  return (
    <div className='vh-100'>
      <Header />
      <div className='d-flex flex-column justify-content-center align-items-center h-50'>
        <div>
          <h2 id='thank-you-message'>Thanks for your order!</h2>
          <h5 className='text-center'>You order is on the way!</h5>
          {orders.map((order) => {
            return (
              <p key={order.id} className='text-center text-muted'>
                <span id='order-item'> Item #{order.itemNumber}</span>: {titles[order.title]}
              </p>
            );
          })}
        </div>
      </div>

      <div className='fixed-bottom'>
        <Footer />
      </div>
    </div>
  );
};

export default Thankyou;
