import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

class QuestionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Correct", "Incorrect", "Unattempted"],
        color: [
          "rgba(98,178, 253, 1)",
          "rgba(955, 233, 196, 1)",
          "rgba(241, 158, 196, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        fill: {
          type: "solid",
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value < 45) {
                return "#7E36AF";
              } else if (value >= 45 && value < 80) {
                return "#164666";
              } else {
                return "#D9534F";
              }
            },
          ],
        },
      },
      series: [32, 17, 50],
    };
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
