import { Row, Button, NavLink } from 'reactstrap';
import Ingredients from '../components/Ingredients';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/ingredients.css';
import { useSelector } from 'react-redux';
import { selectCurrentItem } from '../orderSlice';
import { useParams } from 'react-router-dom';

const AddIngredients = () => {
  const paramsId = useParams();
  const id = paramsId['id'].split('_').pop();
  const currentItem = useSelector((state) => selectCurrentItem(state, id));
  const disabledButton = currentItem.options.filter((i) => i.added);

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
        <Ingredients />
      </Row>
      {disabledButton.length > 0 && (
        <Row id='checkout' className='w-25 m-auto'>
          <NavLink href='/checkout'>
            <Button className='btn btn-dark w-100 mb-5'>CHECK OUT </Button>
          </NavLink>
        </Row>
      )}

      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default AddIngredients;
