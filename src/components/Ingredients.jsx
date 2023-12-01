import { Button, Col, Card } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, selectCurrentItem } from '../orderSlice';
import { useParams } from 'react-router-dom';

const Ingredients = () => {
  const dispatch = useDispatch();
  const paramsId = useParams();
  const id = paramsId['id'].split('_').pop();
  const currentItem = useSelector((state) => selectCurrentItem(state, id));

  const handleIngredients = (currentIngredient) => {
    const tempOptions = currentItem.options.filter((i) => i.id !== currentIngredient.id);
    const newOptions = [...tempOptions, { ...currentIngredient, added: !currentIngredient.added }];
    newOptions.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    const newCurrent = {
      ...currentItem,
      options: newOptions,
    };
    dispatch(addIngredient(newCurrent));
  };

  return currentItem.options.map((item) => {
    return (
      <Col key={item.id} className='p-4 col-7 col-sm-6 col-md-4 p-md-3 p-lg-5 my-4 mx-auto'>
        <Card className='d-flex justify-content-center align-items-center flex-column p-3' id='card-ingredients'>
          <img className='w-100' src={item.icon} alt={item.title} />
          <h6 className='text-center mt-2'>{item.title}</h6>
          <Button
            id='add-button'
            className={`btn ${item.added == false ? 'btn-danger' : 'btn-secondary'} w-100`}
            onClick={() => handleIngredients(item)}
          >
            {item.added == false ? 'ADD' : 'REMOVE'}
          </Button>
        </Card>
      </Col>
    );
  });
};

export default Ingredients;
