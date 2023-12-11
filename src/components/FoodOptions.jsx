import { useSelector, useDispatch } from 'react-redux';
import { Row, Card, CardBody, Button, CardImg, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectAllFood } from '../foodSlice';
import { addItem } from '../orderSlice';

const FoodOptions = () => {
  const food = useSelector(selectAllFood);
  const dispatch = useDispatch();
  const handleAddItem = (id, title, price, options) => {
    const newItem = { id, title, price, options };
    dispatch(addItem(newItem));
  };

  return (
    <Row className='d-flex justify-content-evenly align-items-center w-75 m-auto'>
      {food.map((item) => {
        return (
          <div key={item.id} id='card' className='p-5 col-xs-4 col-sm-6 col-md-4 p-md-3 p-lg-5 mt-4'>
            <Card className='p-3'>
              <CardBody className='text-center'>
                <CardImg src={item.icon} className='w-100 title' />
                <CardTitle className='title mt-2'>{item.title}</CardTitle>
                <CardText className='price b'>$ {item.price}</CardText>
              </CardBody>
              <Link to={`/four-guys/orders/${item.title.toLowerCase()}_${item.id}`}>
                <Button
                  className='btn btn-danger w-100'
                  onClick={() => handleAddItem(item.id, item.title, item.price, item.options)}
                >
                  ADD
                </Button>
              </Link>
            </Card>
          </div>
        );
      })}
    </Row>
  );
};

export default FoodOptions;
