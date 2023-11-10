import React from "react";
import "./testimonials.scss";
import User1 from "../../../assets/images/t1.png";
import User2 from "../../../assets/images/t2.png";
import User3 from "../../../assets/images/t3.png";

export const Testimonials = () => {
  return (
    <>
      <div id="slideset2">
        <div className="divss col-md-12">
          <p>
            “My child was struggling with exam anxiety, but this platform has
            made all the difference. The step-by-step solutions have built their
            confidence, and I’ve seen a significant improvement in their scores.
            It’s a parent’s dream!”
          </p>
          <div className="flexy flexyM">
            <img src={User1} alt="user" width="44px" />
            <h6>Ada Ezenie</h6>
          </div>
        </div>
        <div className="divss col-md-12">
          <p>
            “As someone preparing for a certification exam, this platform has
            been invaluable. The ability to practice and review detailed
            solutions has boosted my confidence. I highly recommend it to anyone
            with exam goals.”
          </p>
          <div className="flexy flexyM">
            <img src={User2} alt="user" width="44px" />
            <h6>Adeola Adekola</h6>
          </div>
        </div>
        <div className="divss col-md-12">
          <p>
            “This platform has been a game-changer for my exam preparation. The
            practice tests are spot-on, and the detailed solutions have been a
            lifesaver. I’ve seen a significant improvement in my scores since
            using it.”
          </p>
          <div className="flexy flexyM">
            <img src={User3} alt="user" width="44px" />
            <h6>Peter Olugbenga</h6>
          </div>
        </div>
      </div>
    </>
  );
};
