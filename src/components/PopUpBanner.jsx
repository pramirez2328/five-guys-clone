import '../styles/PopUpBanner.css';

const PopUpBanner = ({ message, title, added, icon }) => {
  console.log('message', message, 'title', title, 'added', added, 'icon', icon);
  return (
    <div className='pop-up-banner col-11 col-md-6 rounded' style={{ visibility: message ? 'visible' : 'hidden' }}>
      <div className='col-12  d-flex align-items-center'>
        <div className='col-4'>
          <img src={icon} alt='ingredient' className='w-100' />
        </div>
        <div className='w-100'>
          <div className='d-flex flex-column justify-content-center'>
            <h5 className='text-center message'>
              {title} was {!added ? 'added' : 'removed'}!
            </h5>
            <h6 className='text-center message'>add more or go directly to your cart!</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBanner;
