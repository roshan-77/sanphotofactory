import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ImageModal(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <img src={props.source} alt="" />
    </Modal>
  );
}