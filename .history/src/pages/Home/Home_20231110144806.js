import React from "react";
import EducareNavBar from "../../components/EducareNavBar/EducareNavBar";
import Img from "../../assets/images/main-pic.png";

import "./home.scss";
export const Home = () => {
  return (
    <>
      <EducareNavBar />
      <div className="landing-div col-md-12 flexy">
        <div className="col-md-5"></div>
        <div className="col-md-5">
          <img src={Img} alt="image" width="100%" />
        </div>
      </div>
    </>
  );
};
