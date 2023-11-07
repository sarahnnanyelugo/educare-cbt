import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

class QuestionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        backgroundColor: ["red", "grey", "blue"],
      },
      series: [44, 55, 41],
      labels: ["A", "B", "C"],
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
