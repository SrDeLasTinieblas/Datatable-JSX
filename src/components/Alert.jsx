import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Alert = ({title, message}) => {
  const [showModal, setShowModal] = useState(true); // Inicialmente establecemos el estado showModal en true para que el modal se muestre al cargar el componente

  const handleClose = () => setShowModal(false); // La función handleClose cambia el estado showModal a false para ocultar el modal
  const handleShow = () => setShowModal(true); // La función handleShow cambia el estado showModal a true para mostrar el modal

  


  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Alert;
