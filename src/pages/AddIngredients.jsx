import { Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import '../styles/ingredients.css';
import { useSelector } from 'react-redux';
import { selectCurrentItem, selectCurrentItemUpdated } from '../orderSlice';
import { useParams } from 'react-router-dom';
import checkoutImage from '../assets/checkoutImage.png';

const AddIngredients = () => {
  const paramsId = useParams();
  const id = paramsId['id'].split('_').pop();

  const currentItem = useSelector((state) => {
    return id.includes('update')
      ? selectCurrentItemUpdated(state, id.replace('update', ''))
      : selectCurrentItem(state, id);
  });
  console.log('current', currentItem);

  const disabledButton = currentItem.options.filter((i) => i.added);

  return (
    <div className='order-container'>
      <Row>
        <HeaderOrder />
      </Row>
      <Row className='subheader-image'>
        <img src={checkoutImage} alt='burger image' />
      </Row>
      <Row id='add-more' className='col-6 col-md-3 m-auto'>
        <Link to='/order'>
          <Button className='btn btn-danger w-100'>ADD MORE</Button>
        </Link>
      </Row>
      <Row className='col-md-9 col-xl-6 m-auto'>
        <Ingredients />
      </Row>
      {disabledButton.length > 0 && (
        <Row id='checkout' className='col-6 col-md-3 m-auto'>
          <Link to='/checkout'>
            <Button className='btn btn-dark w-100 mb-5'>CHECK OUT </Button>
          </Link>
        </Row>
      )}

      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default AddIngredients;
