import { Row, Button, NavLink } from 'reactstrap';
import Ingredients from '../components/Ingredients';
import HeaderOrder from '../components/HeaderOrder';
import { selectCurrentItemById } from '../foodSlice';
import { useLocation } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import '../styles/ingredients.css';

const AddIngredients = () => {
  const location = useLocation();
  const id = location.state;
  const currentItem = useSelector(selectCurrentItemById(id), shallowEqual);

  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='brake-line' />
      <Row>{/* <p className='m-0'>ITEM ADDED!</p> */}</Row>
      <Row id='add-more' className='w-25 m-auto'>
        <NavLink href='/order'>
          <Button className='btn btn-danger w-100'>ADD MORE</Button>
        </NavLink>
      </Row>
      <Row className='col-md-9 col-xl-6 m-auto'>
        <Ingredients currentItem={currentItem} />
      </Row>
      <Row id='checkout' className='w-25 m-auto'>
        <NavLink href='/checkout'>
          <Button className='btn btn-dark w-100'>CHECK OUT</Button>
        </NavLink>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default AddIngredients;
