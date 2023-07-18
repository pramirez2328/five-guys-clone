import Ingredients from './Ingredients';
import { Row, Button, NavLink } from 'reactstrap';
import '../styles/ingredients.css';

const AddIngredients = ({ currentItem, handleAddMore, handleAddAndRemove, addIng, action }) => {
  return (
    <>
      <Row id='add-more' className='w-25 m-auto'>
        <Button className='btn btn-danger w-100' onClick={handleAddMore}>
          ADD MORE
        </Button>
      </Row>
      <Row className='col-md-9 col-xl-6 m-auto'>
        <Ingredients
          currentItem={currentItem}
          handleAddAndRemove={handleAddAndRemove}
          addIng={addIng}
          action={action}
        />
      </Row>
      <Row id='checkout' className='w-25 m-auto'>
        <NavLink href='/checkout'>
          <Button className='btn btn-dark w-100'>CHECK OUT</Button>
        </NavLink>
      </Row>
    </>
  );
};

export default AddIngredients;
