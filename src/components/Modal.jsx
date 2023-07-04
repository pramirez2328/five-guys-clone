import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  let icon = args.children[0].props.src;
  const { className: classN, children: title } = args.children[1].props;
  const currentItem = args['currenItem'];
  return (
    <div>
      <img src={icon} alt='icon' onClick={toggle} />
      <p className={classN}>{title}</p>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{currentItem.title}</ModalHeader>
        <ModalBody>TYPES: {currentItem.type}</ModalBody>
        <ModalBody>{currentItem.description}</ModalBody>
        <ModalFooter>{currentItem.calories}</ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
