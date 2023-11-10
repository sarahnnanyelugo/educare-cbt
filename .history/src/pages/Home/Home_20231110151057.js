import React from "react";
import EducareNavBar from "../../components/EducareNavBar/EducareNavBar";
import Img from "../../assets/images/main-pic.png";
import Grange from "../../assets/images/grange.png";
import LBS from "../../assets/images/lbs.png";
import Meadow from "../../assets/images/meadow.png";
import Evergreen from "../../assets/images/evergreen.png";
import Lagoon from "../../assets/images/lagoon.png";
import Starvile from "../../assets/images/starvile.png";

import "./home.scss";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <EducareNavBar />
      <div className="landing-div col-md-12 flexy">
        <div className="col-md-4 offset-md-1 mt">
          <h1>Your Exam Journey Starts Here ⚡︎</h1>
          <p>
            Achieve exam-ready confidence with our CBT tools, providing
            comprehensive practice and detailed solutions to boost your
            performance.
          </p>
          <Link>
            <button>Browse questions</button>
          </Link>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={Img} alt="image" width="100%" />
        </div>
      </div>
      <center>
        <h4>Trusted by</h4>
        <div className="col-md-10">
          <img src={Grange} alt="logo" />
          <img src={Grange} alt="logo" />
          <img src={Grange} alt="logo" />
          <img src={Grange} alt="logo" />
          <img src={Grange} alt="logo" />
          <img src={Grange} alt="logo" />
        </div>
      </center>
    </>
  );
};
