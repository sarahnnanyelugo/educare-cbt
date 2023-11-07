import ReactApexChart from "react-apexcharts";
import React from "react";
class TimeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          //   name: "Time (secs)",
          data: [
            44, 55, 41, 27, 22, 43, 21, 33, 45, 31, 87, 65, 35, 10, 10, 10, 10,
            10, 16, 10, 30, 10, 10, 10, 10, 40, 40, 50, 20, 50, 55, 10, 53, 11,
            60, 50, 36, 41, 30, 10, 18, 13, 50, 19, 20, 10, 40, 18, 34, 45,
          ],
        },
      ],
      options: {
        annotations: {
          points: [
            {
              x: "Bananas",
              seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: ["red", "#FEB019"],
                },
              },
            },
          ],
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: "2%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"],
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
            "13",
          ],
          tickPlacement: "on",
        },
        yaxis: {
          title: {
            text: "Time (secs)",
          },
        },
        fill: "red",
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export default TimeChart;
