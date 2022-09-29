import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modaal({handleDelete, handleShow, handleClose, popup, setPopup}) {
  return (
    
    <>
    <Modal show={popup.show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Delete Celebrity!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete ?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  </>

  )
}

export default Modaal
