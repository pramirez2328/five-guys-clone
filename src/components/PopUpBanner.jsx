import '../styles/PopUpBanner.css';

const PopUpBanner = ({ message, title, added, icon }) => {
  return (
    <div className='pop-up-banner col-8 col-md-3' style={{ visibility: message ? 'visible' : 'hidden' }}>
      <div className='col-12  d-flex'>
        <div className='col-4'>
          <img src={icon} alt='ingredient' className='w-100' />
        </div>
        <div className='col-8'>
          <h5 className='text-center message'>
            {title} was {!added ? 'added' : 'removed'}!
          </h5>
          <h6 className='text-center message'>add more or go directly to your cart!</h6>
        </div>
      </div>
    </div>
  );
};

export default PopUpBanner;
