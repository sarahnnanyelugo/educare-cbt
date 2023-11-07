import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

class QuestionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Correct", "Incorrect", "Unattempted"],
        chart: {
          fill: ["red", "blue", "grey"],
        },
      },
      series: [32, 17, 50],
    };
  }

  render() {
    return (
      <div className="donut">
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
