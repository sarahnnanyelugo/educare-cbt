import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

class QuestionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Correct", "Incorrect", "Unattempted"],
        color: ["#CECBCB", "#4A13B2", "#2F67D8"],

        fill: {
          type: "solid",
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value >= 45) {
                return "#CECBCB";
              } else if (value <= 45 && value > 17) {
                return "#4A13B2";
              } else if (value <= 17) {
                return "#2F67D8";
              }
            },
          ],
        },
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 0,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
      },
      events: {
        beforeMount: this.testEndAnimation(),
      },
      series: [32, 17, 50],
    };
  }
  testEndAnimation() {
    alert("Animation mounting");
  }
  render() {
    return (
      <div className="donut" id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="70%"
        />
      </div>
    );
  }
}
export default QuestionChart;
