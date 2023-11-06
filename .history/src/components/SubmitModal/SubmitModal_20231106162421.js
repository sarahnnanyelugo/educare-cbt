import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./test-modal.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Play from "../../assets/images/play.svg";
import { Link } from "react-router-dom";
export const SubmitModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="test-modal-div">
        {" "}
        <button onClick={handleShow}>Practice</button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className="test-body">
              <h6>Are You Sure?</h6>
              <p>
                Clicking YES will End the Test. Make sure you have answered all
                the question(s).
              </p>
              <div className="flexy">
                {" "}
                <div>
                  <h6>Attempted Questions</h6>
                  <p>35</p>
                </div>
                <div className="">
                  <h6>Unattempted Questions</h6>
                  <p>15</p>
                </div>
              </div>
              <div className="flexy ">
                <button>No, I’m not done</button>
                <button>Yes, I’m done</button>
              </div>
            </div>
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
