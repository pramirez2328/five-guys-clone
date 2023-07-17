import HeaderOrder from '../components/HeaderOrder';
import Footer from '../components/Footer';
import Ingredients from '../components/Ingredients';
import { useParams } from 'react-router-dom';
import { foodInformation } from '../util/foodInformation';
import { Row, Button, NavLink } from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ingredients.css';

const AddIngredients = () => {
  const { id } = useParams();
  const currentItem = foodInformation.filter((i) => i.title.toLowerCase() === id).pop();
  const counter = useLocation()?.state?.data;
  console.log(counter);

  return (
    <>
      <HeaderOrder counter={counter} />
      <Row className='brake-line'></Row>
      <Row id='add-more' className='w-25 m-auto'>
        <Link to='/order' state={{ data: counter }}>
          <Button className='btn btn-danger w-100'>ADD MORE</Button>
        </Link>
      </Row>
      <Row className='col-md-9 col-xl-6 m-auto'>
        <Ingredients currentItem={currentItem} />
      </Row>
      <Row id='checkout' className='w-25 m-auto'>
        <NavLink href='/checkout'>
          <Button className='btn btn-dark w-100'>CHECK OUT</Button>
        </NavLink>
      </Row>

      <Footer />
    </>
  );
};

export default AddIngredients;
