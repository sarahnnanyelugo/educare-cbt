import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import User1 from "../../assets/images/t1.png";
import User2 from "../../assets/images/t2.png";
import User3 from "../../assets/images/t3.png";
let slidesData = [
  {
    key: 1,
    content:
      "“My child was struggling with exam anxiety, but this platform has made all the difference. The step-by-step solutions have built their confidence, and I’ve seen a significant improvement in their scores. It’s a parent’s dream!”",
    photo: User1,
  },
  {
    key: 2,
    content:
      "“This platform has been a game-changer for my exam preparation. The practice tests are spot-on, and the detailed solutions have been a lifesaver. I’ve seen a significant improvement in my scores since using it.”",
    photo: User2,
    testifier: "Adeola Adekola",
  },
  {
    key: 3,
    content: "3",
  },
  {
    key: 4,
    content: "4",
  },
  {
    key: 5,
    content: "5",
  },
  {
    key: 6,
    content: "6",
  },
  {
    key: 7,
    content: "7",
  },
  {
    key: 8,
    content: "8",
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };
  render() {
    return (
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          margin: "0 auto",
          //   background: "#7FfFbF",
        }}
      >
        <VerticalCarousel
          slides={slidesData}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
