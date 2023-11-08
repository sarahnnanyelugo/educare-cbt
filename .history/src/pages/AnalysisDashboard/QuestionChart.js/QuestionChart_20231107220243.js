import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

class QuestionChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,

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
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
      },
      series: [32, 17, 50],
    };
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    this.createIntersectionObserver();
  }
  componentWillUnmount() {
    this.disconnectIntersectionObserver();
  }

  createIntersectionObserver = () => {
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection,
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    if (this.chartRef.current) {
      this.intersectionObserver.observe(this.chartRef.current);
    }
  };
  disconnectIntersectionObserver = () => {
    if (this.intersectionObserver && this.chartRef.current) {
      this.intersectionObserver.unobserve(this.chartRef.current);
    }
  };
  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.setState({ isVisible: true });
      }
    });
  };
  render() {
    const { isVisible } = this.state;
    const chartOptions = {
      // Your chart options with animations
      chart: {
        animations: {
          enabled: isVisible, // Enable animations when chart is visible
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      // Add your chart data and other configurations here
    };
    return (
      <div className="donut" id="chart" ref={this.chartRef}>
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
