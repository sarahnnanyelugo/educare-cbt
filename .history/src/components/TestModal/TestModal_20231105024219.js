import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./test-modal.scss";
export const TestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="test-modal-div">
        {" "}
        <button onClick={handleShow}>Practice</button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>
              <div className="flexy">
                <div style={{ flexGrow: 1 }}>
                  {" "}
                  <h5>2010 JAMB Chemistry</h5>
                  <p style={{ fontSize: "14px" }}>
                    2020 GEOGRAPHY WAEC PRACTICE
                  </p>
                </div>
                <button className="attempts-btn">
                  0<br />
                  Attempts
                </button>
              </div>
            </Modal.Title>
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
      </div>
    </>
  );
};
