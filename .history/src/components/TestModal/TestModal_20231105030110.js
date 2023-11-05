import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./test-modal.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Play from "../../assets/images/play.svg";
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
            <div className="flexy col-md-12">
              <div className="modal-tops">
                {" "}
                <h5>2010 JAMB Chemistry</h5>
                <p style={{ fontSize: "14px" }}>2020 GEOGRAPHY WAEC PRACTICE</p>
              </div>
              <button className="attempts-btn ">
                0<br />
                Attempts
              </button>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="test-body flexy">
              {" "}
              <div>
                {" "}
                <div className="flexy" style={{ marginBottom: "7px" }}>
                  <img src={Time} alt="logo" width="22px" height="22px" />
                  <small>30 mins</small>
                </div>
                <div className="flexy">
                  <img src={Question} alt="logo" width="22px" height="22px" />
                  <small>50 questions</small>
                </div>
              </div>
              <div className="flexy offset-md-2">
                <img src={Tick} alt="logo" width="22px" height="22px" />
                <small>50 marks</small>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="cance-btn">
              Cancel
            </button>
            <button onClick={handleClose} className="start-btn offset-md-4">
              <img src={Play} alt="logo" width="18px" height="18px" /> Start
              Test
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
