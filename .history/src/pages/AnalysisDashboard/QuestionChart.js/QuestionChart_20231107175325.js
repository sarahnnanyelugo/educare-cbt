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
