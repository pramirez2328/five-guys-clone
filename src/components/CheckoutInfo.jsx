import usStates from '../util/usStates';
const CheckoutInfo = ({ handlePlaceOrder, finalOrder }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handlePlaceOrder();
  };

  return (
    <div className='col-md-12 m-auto mb-4'>
      <h4 className='text-muted text-center mt-4 mb-4'>Payment Method</h4>

      <form className='row g-3' onSubmit={handleSubmit}>
        <div className='col-6 col-md-8 mx-auto d-flex flex-column align-items-center' id='paymentMethod-container'>
          <div className='col-md-6 d-flex flex-column mb-3'>
            <label htmlFor='cardNumber' className='mx-2 payment-label'>
              Card Number:
            </label>
            <input type='text' id='cardNumber' name='cardNumber' placeholder='*************' required />
          </div>

          <div className='col-md-6 d-flex flex-column mb-3'>
            <label htmlFor='expiryDate ' className='mx-2 payment-label'>
              Expiry Date:
            </label>
            <input type='text' id='expiryDate' name='expiryDate' placeholder='MM/YY' required />
          </div>

          <div className='col-md-6 d-flex flex-column'>
            <label htmlFor='cvv' className='mx-2 payment-label'>
              CVV:
            </label>
            <input type='text' id='cvv' name='cvv' placeholder='***' required />
          </div>
        </div>

        <div className='col-md-6'>
          <label htmlFor='username' className='form-label payment-label'>
            Name
          </label>
          <input type='text' className='form-control' id='username' required />
        </div>

        <div className='col-md-6'>
          <label htmlFor='inputEmail4' className='form-label payment-label'>
            Email
          </label>
          <input type='email' className='form-control' id='inputEmail4' required />
        </div>

        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label payment-label'>
            Address
          </label>
          <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' required />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress2' className='form-label payment-label'>
            Floor
          </label>
          <input type='text' className='form-control' id='inputAddress2' placeholder='Enter Apartment level' required />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputCity' className='form-label payment-label'>
            City
          </label>
          <input type='text' className='form-control' id='inputCity' required />
        </div>
        <div className='col-md-4'>
          <label htmlFor='inputState' className='form-label payment-label'>
            State
          </label>
          <select id='inputState' className='form-select'>
            <option value=''>Choose...</option>
            {usStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-2'>
          <label htmlFor='inputZip' className='form-label payment-label'>
            Zip
          </label>
          <input type='text' className='form-control' id='inputZip' required />
        </div>
        <div className='col-12 d-flex justify-content-center'>
          <button type='submit' className='col-12 col-md-6 btn btn-success' disabled={finalOrder === 0}>
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInfo;
