import ReactApexChart from "react-apexcharts";
import React from "react";
class TimeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Servings",
          data: [
            44, 55, 41, 27, 22, 43, 21, 33, 45, 31, 87, 65, 35, 10, 10, 10, 10,
            10, 16, 10, 30, 10, 10, 10, 10, 40, 10, 10, 20, 50, 10, 10, 10, 10,
            10, 10, 10, 11, 10, 10, 18, 13, 10, 10, 10, 10, 10, 10, 15, 16,
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
                  background: ["#775DD0", "#FEB019"],
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
            text: "Servings",
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
