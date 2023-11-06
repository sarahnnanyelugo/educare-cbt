import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./submit-modal.scss";
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
      <div className="submit-modal-div">
        {" "}
        <button onClick={handleShow} className="next-btn ">
          Submit
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <Modal.Header></Modal.Header>
            <div className="test-body">
              <h6>Are You Sure?</h6>

              <p>
                Clicking YES will End the Test. Make sure you have answered all
                the question(s).
              </p>
              <div className="flexy">
                {" "}
                <div className="col-md-6">
                  <h6>Attempted Questions</h6>
                  <p>35</p>
                </div>
                <div className="">
                  <h6>Unattempted Questions</h6>
                  <p>15</p>
                </div>
              </div>
              <div className="flexy ">
                <button className="not-done-btn ">No, I’m not done</button>
                <button className="done-btn offset-md-5">Yes, I’m done</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
