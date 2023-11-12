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
    testifier: "Ada Ezenie",
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
    content:
      "“This platform has been a game-changer for my exam preparation. The practice tests are spot-on, and the detailed solutions have been a lifesaver. I’ve seen a significant improvement in my scores since using it.”",
    photo: User3,
    testifier: "Peter Olugbenga",
  },
  {
    key: 4,
    content:
      "As a parent, I'm always looking for ways to support my child's education. This CBT app for exam preparation is a gem. It helped my child build confidence, master the material, and excel in their JAMB and WAEC exams. I highly recommend it to all parents.",
    photo: User1,
    testifier: "Sarah Nnanyelugo",
  },
  {
    key: 5,
    content:
      "I can't thank the creators of this CBT application enough! It's been a game-changer for my child's exam preparation. The interactive practice tests and detailed performance analytics have boosted my child's confidence and results. Highly recommended for all parents!",
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
