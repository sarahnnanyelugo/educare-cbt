import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const TestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Practice</button>

      <Modal show={show} onHide={handleClose}       centered
>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Cancel
          </button>
          <button variant="primary" onClick={handleClose}>
            Start Test
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
