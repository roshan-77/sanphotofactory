import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ImageModal(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-layout'
    >
      <Modal.Header closeButton>{props.photoType.toUpperCase()}
      </Modal.Header>
      <img className = "modal-image" src={props.source} alt=""/>
    </Modal>
  );
}