import React from "react";
import EducareNavBar from "../../components/EducareNavBar/EducareNavBar";
import Img from "../../assets/images/main-pic.png";
import Grange from "../../assets/images/grange.png";
import LBS from "../../assets/images/lbs.png";
import Meadow from "../../assets/images/meadow.png";
import Evergreen from "../../assets/images/evergreen.png";
import Lagoon from "../../assets/images/lagoon.png";
import Starvile from "../../assets/images/starvile.png";
import Jamb from "../../assets/images/jamb.png";
import Waec from "../../assets/images/waec.png";
import Igcse from "../../assets/images/igcse.png";
import Toefl from "../../assets/images/toefl.png";
import Neco from "../../assets/images/neco.png";
import Ielt from "../../assets/images/ielt.png";
import Olympiad from "../../assets/images/olympiad.png";
import Sat from "../../assets/images/sat.png";
import Bece from "../../assets/images/bece.png";
import Users from "../../assets/images/users.png";

import "./home.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
// import { Sample } from "../Sample/Sample";
import Example from "../Sample/example";
// import VerticalCarousel from "../Sample/VerticalCarousel";
import { Testimonials } from "./Testimonials/Testimonials";
export const Home = () => {
  return (
    <>
      <EducareNavBar />
      <div className="landing-div col-md-12 flexy">
        <div className="col-md-4 offset-md-1 mt">
          <h1>
            Your Exam Journey
            <br /> Starts Here ⚡︎
          </h1>
          <p className="col-md-10">
            Achieve exam-ready confidence with our CBT tools, providing
            comprehensive practice and detailed solutions to boost your
            performance.
          </p>

          <Link to={"/exam-list"}>
            <button>Browse questions</button>
          </Link>
          <br />
          <img src={Users} alt="image" width="136px" className="mt5" />
          <h6 style={{ fontFamily: "   font-family: rebondG-Bold" }}>
            Over 5,000 registered students
          </h6>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={Img} alt="image" width="100%" />
        </div>
      </div>
      <center>
        <h4 style={{ opacity: "0.5" }}>Trusted by</h4>
        <div className="col-md-10 partners">
          <img src={Meadow} alt="logo" className="meadow" />
          <img src={Lagoon} alt="logo" className="lagoon" />
          <img src={Grange} alt="logo" className="grange" />
          <img src={Evergreen} alt="logo" className="evergreen" />
          <img src={LBS} alt="logo" className="lbs" />
          <img src={Starvile} alt="logo" className="starvile" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 mt">
        <center>
          <h3 style={{ fontFamily: "   font-family: rebondG-Bold" }}>
            One platform for all Exams
          </h3>
          <p>Browse through our top exams questions</p>
        </center>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Jamb} alt="logo" className="" width="44px" />
              <h6>JAMB Exams</h6>
            </div>
          </div>{" "}
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Waec} alt="logo" className="" width="44px" />
              <h6>Waec Exams</h6>
            </div>
          </div>{" "}
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Igcse} alt="logo" className="" width="38px" />
              <h6>IGCSE Exams</h6>
            </div>
          </div>{" "}
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img
                src={Toefl}
                alt="logo"
                className="mt1"
                width="44px"
                height="9px"
              />
              <h6>TOEFL Exams</h6>
            </div>
          </div>{" "}
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Neco} alt="logo" className="" width="44px" />
              <h6>NECO Exams</h6>
            </div>
          </div>
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Ielt} alt="logo" className="" width="70px" />
              <h6>IELT Exams</h6>
            </div>
          </div>{" "}
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Olympiad} alt="logo" className="" width="38px" />
              <h6>OLYMPIAD Exams</h6>
            </div>
          </div>
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Sat} alt="logo" className="" width="70px" />
              <h6>SAT Exams</h6>
            </div>
          </div>
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Bece} alt="logo" className="" width="41px" />
              <h6>BECE Exams</h6>
            </div>
          </div>
          <div className="col">
            <div className="exam-container flexy flexyM">
              {" "}
              <img src={Bece} alt="logo" className="" width="44px" />
              <h6>Checkpoint Exams</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mt">
        {" "}
        <center>
          <h2>Discover how we support success for every learner</h2>
        </center>
      </div>
      <div className="col-md-12 all-learners mt">
        <center>
          <div className="col-md-5">
            <h4 style={{ fontFamily: "   font-family: rebondG-Bold" }}>
              For all learners
            </h4>
            <p>
              Whether you’re a student preparing for standardized tests, a
              professional seeking certification, or someone on a lifelong
              learning journey, our platform is designed to cater to your unique
              needs
            </p>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <h1>01</h1>
            <div className="steps">
              <h4>
                Sign <span>Up</span>
              </h4>
              <p>
                Join our platform by creating your account. It’s a quick
                process, providing access to all questions.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <h1>02</h1>
            <div className="steps">
              <h4>
                Fund <span>your</span> Wallet
              </h4>
              <p>
                Add units securely to your wallet, enabling access to practice
                tests and get detailed solutions.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <h1>03</h1>
            <div className="steps">
              <h4>
                Take <span>a </span> test
              </h4>
              <p>
                Select a test, answer questions, and review with detailed
                solutions to prepare for your exams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-div flexy">
        <div className="col-md-3 offset-md-2 heading">
          <h4>People say about us</h4>
          <p>
            The only one platform who caters exam practice test for learners
            across the globe.
          </p>
        </div>
        <div className="col-md-4 offset-md-1">
          <Example />
        </div>
      </div>

      <div className="col-md-8 offset-md-2 flexy prefooter">
        <div className="col-md-6">
          <h1>
            Starts Your
            <br /> Exam Journey Now ⚡︎
          </h1>
          <p>
            Embrace the power of technology and learning and let's help you ace
            your exams
          </p>
        </div>
        <div className="col-md-3 offset-md-3">
          <Link to={"/authenticate"}>
            <button>Browse subjects</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
