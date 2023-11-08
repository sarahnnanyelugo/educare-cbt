import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./test-modal.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Play from "../../assets/images/play.svg";
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
          <Modal.Footer>
            <button onClick={handleClose} className="cance-btn">
              Cancel
            </button>
            <div className="flexy flexyM start-btn">
              <h6>Free</h6>
              <Link to={"/test-instructions"}>
                <button onClick={handleClose} className="">
                  <img src={Play} alt="logo" width="18px" height="18px" /> Start
                  Test
                </button>
              </Link>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
