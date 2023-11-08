import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./test-modal.scss";

import { Link } from "react-router-dom";
export const TopUpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="test-modal-div">
        {" "}
        <button onClick={handleShow} style={{ border: "none" }}>
          Top up balance
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <h5>Select a payment gateway</h5>
            <hr />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
