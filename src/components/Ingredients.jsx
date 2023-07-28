import { Button, Col, Card } from 'reactstrap';

const Ingredients = ({ currentItem }) => {
  return currentItem[0].options.map((item) => {
    return (
      <Col key={item.id} className='p-4 col-7 col-sm-6 col-md-4 p-md-3 p-lg-5 my-4 mx-auto'>
        <Card className='d-flex justify-content-center align-items-center flex-column p-3' id='card-ingredients'>
          <img className='w-100' src={item.icon} alt={item.title} />
          <h6 className='text-center mt-2'>{item.title}</h6>
          <Button id='add-button' className={`btn ${item.added == false ? 'btn-danger' : 'btn-secondary'} w-100`}>
            {item.added == false ? 'ADD' : 'REMOVE'}
          </Button>
        </Card>
      </Col>
    );
  });
};

export default Ingredients;
