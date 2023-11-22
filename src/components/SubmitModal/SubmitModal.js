import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./submit-modal.scss";
import Time from "../../assets/images/time.svg";
import Question from "../../assets/images/question.svg";
import Tick from "../../assets/images/tick.svg";
import Play from "../../assets/images/play.svg";
import { Link } from "react-router-dom";
import { questions } from "../../TestData";
export const SubmitModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [attempted, setAttempted] = useState(0);
  const [unattempted, setUnattempted] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  useEffect(() => {
    const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
    setTotalQuestions(questions.length);
    setAttempted(myArray.length);
  }, []);
  useEffect(() => {
    setUnattempted(totalQuestions - attempted);
  }, [attempted, totalQuestions]);

  return (
    <>
      <div className="submit-modal-div">
        {" "}
        <button
          onClick={handleShow}
          className="next-btn "
          style={{ border: "none" }}
        >
          Submit
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className="test-body">
              <div className="submit-query">
                {" "}
                <h6>Are You Sure?</h6>
                <p>
                  Clicking <span>YES</span> will End the Test. Make sure you
                  have answered all the question(s).
                </p>
              </div>
              <div className="flexy">
                {" "}
                <div className="col-md-6">
                  <h6>Attempted Questions</h6>
                  <p>{attempted}</p>
                </div>
                <div className="">
                  <h6>Unattempted Questions</h6>
                  <p>{unattempted}</p>
                </div>
              </div>
              <Modal.Footer>
                {" "}
                <div className="flexy ">
                  {" "}
                  <button className="not-done-btn " onClick={handleClose}>
                    No, I’m not done
                  </button>
                  <Link to={"/summary-page"}>
                    {" "}
                    <button className="done-btn offset-md-5">
                      Yes, I’m done
                    </button>
                  </Link>
                </div>
              </Modal.Footer>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
