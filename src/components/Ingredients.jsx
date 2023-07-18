import { Button, Col, Card } from 'reactstrap';
const Ingredients = ({ currentItem }) => {
  if (currentItem) {
    const ingredients = currentItem[0].map((item, index) => ({ ...item, id: index }));
    return ingredients.map((item) => {
      return (
        <Col key={item.id} className='p-4 col-7 col-sm-6 col-md-4 p-md-3 p-lg-5 my-4 mx-auto'>
          <Card className='d-flex justify-content-center align-items-center flex-column p-3' id='card-ingredients'>
            <img className='w-100' src={item.imgIcon} alt={item.title} />
            <h6 className='text-center mt-2'>{item.item}</h6>
            <Button className='btn btn-danger w-100'>ADD</Button>
          </Card>
        </Col>
      );
    });
  } else {
    return null;
  }
};

export default Ingredients;
