import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slidesData = [
  {
    key: 1,
    content: "1",
  },
  {
    key: 2,
    content: "2",
  },
  {
    key: 3,
    content: "2",
  },
  {
    key: 4,
    content: "3",
  },
  {
    key: 5,
    content: "4",
  },
  {
    key: 6,
    content: "5",
  },
  {
    key: 7,
    content: "6",
  },
  {
    key: 8,
    content: "7",
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
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "40vw",
          height: "100vh",
          margin: "0 auto",
          background: "#7FfFbF",
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
