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
            enabled: false,
          },
        },
      },
      series: [32, 17, 50],
      isVisible: false,
    };
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    // Create an Intersection Observer when the component mounts
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection,
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    if (this.chartRef.current) {
      this.intersectionObserver.observe(this.chartRef.current);
    }
  }
  componentWillUnmount() {
    // Clean up the Intersection Observer when the component unmounts
    if (this.intersectionObserver && this.chartRef.current) {
      this.intersectionObserver.unobserve(this.chartRef.current);
    }
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Enable animations when the chart is in view
        this.setState({ isVisible: true });
      }
    });
  };

  render() {
    const { options, series, isVisible } = this.state;
    if (isVisible) {
      // Enable animations when isVisible is true
      options.chart.animations.enabled = true;
    }
    return (
      <div className="donut" id="chart" ref={this.chartRef}>
        <Chart options={options} series={series} type="pie" width="70%" />
      </div>
    );
  }
}
export default QuestionChart;
