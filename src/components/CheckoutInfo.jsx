const CheckoutInfo = () => {
  return (
    <div className='col-md-8 m-auto mb-4'>
      <h4 className='text-muted'>Payment Method</h4>

      <form className='row g-3'>
        <div className='col-md-12'>
          <label htmlFor='username' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' id='username' />
        </div>

        <div className='col-md-6'>
          <label htmlFor='inputEmail4' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' id='inputEmail4' />
        </div>

        <div className='col-md-6'>
          <label htmlFor='credit-card' className='form-label'>
            Credit Card
          </label>
          <input type='text' className='form-control' id='credit-card' placeholder='**********************' />
        </div>

        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label'>
            Address
          </label>
          <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress2' className='form-label'>
            Floor
          </label>
          <input type='text' className='form-control' id='inputAddress2' placeholder='Enter Apartment level' />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputCity' className='form-label'>
            City
          </label>
          <input type='text' className='form-control' id='inputCity' />
        </div>
        <div className='col-md-4'>
          <label htmlFor='inputState' className='form-label'>
            State
          </label>
          <select id='inputState' className='form-select'>
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-2'>
          <label htmlFor='inputZip' className='form-label'>
            Zip
          </label>
          <input type='text' className='form-control' id='inputZip' />
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-success'>
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInfo;
