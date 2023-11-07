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
            44, 55, 41, 27, 22, 43, 21, 33, 45, 31, 87, 65, 35, 30, 50, 20, 40,
            10, 16, 10, 30, 10, 30, 50, 10, 40, 40, 50, 20, 50, 55, 10, 53, 11,
            60, 50, 36, 41, 30, 10, 18, 13, 50, 19, 20, 10, 40, 18, 34, 45,
          ],
        },
      ],
      options: {
        annotations: {
          points: [
            {
              seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
              },
            },
          ],
        },
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            // borderRadius: 10,
            columnWidth: "4px",
            distributed: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "s";
          },
          //   offsetY: -20,
          style: {
            fontSize: "8px",
            colors: ["black"],
            fontWeight: "bold",
          },
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ["#fff"],
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
            "Q23",
            "Q24",
            "Q25",
            "Q26",
            "Q27",
            "Q28",
            "Q29",
            "Q30",
            "Q31",
            "Q32",
            "Q33",
            "Q34",
            "Q35",
            "Q36",
            "Q37",
            "Q38",
            "Q39",
            "Q40",
            "Q41",
            "Q42",
            "Q43",
            "Q44",
            "Q45",
            "Q46",
            "Q47",
            "Q48",
            "Q49",
            "Q50",
          ],
          tickPlacement: "on",
        },
        yaxis: {
          title: {
            text: "Time (secs)",
          },
        },
        fill: {
          type: "solid",
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value >= 45) {
                return "#D52143";
              } else if (value <= 45 && value > 17) {
                return "#2F67D8";
              } else if (value <= 17) {
                return "#5EAA42";
              }
            },
          ],
        },
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
          height={600}
        />
      </div>
    );
  }
}
export default TimeChart;
