import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center vh-100 col-12'>
        <h1>404 - Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
      <div className='fixed-bottom'>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
