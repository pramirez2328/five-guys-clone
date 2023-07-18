import { Row, Card, CardBody, Button, CardImg, CardTitle, CardText } from 'reactstrap';
import { foodInformation } from '../util/foodInformation';

const FoodOptions = ({ handleCounter }) => {
  return (
    <Row className='d-flex justify-content-evenly align-items-center w-75 m-auto'>
      {foodInformation.map((item) => {
        return (
          <div key={item.id} id='card' className='p-4 col-sm-6 col-md-4 p-md-3 p-lg-5 mt-4'>
            <Card className='p-3'>
              <CardBody className='text-center'>
                <CardImg src={item.icon} className='w-100 title' />
                <CardTitle className='title mt-2'>{item.title}</CardTitle>
                <CardText className='price b'>$ {item.price}</CardText>
              </CardBody>
              <Button className='btn btn-danger' onClick={() => handleCounter(item.id)}>
                ADD
              </Button>
            </Card>
          </div>
        );
      })}
    </Row>
  );
};

export default FoodOptions;
