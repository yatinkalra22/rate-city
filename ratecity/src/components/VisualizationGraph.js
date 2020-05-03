import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../styles/VisualizationGraph.css";

export default class VisualizationGraph extends Component {
  render() {
    let data = { labels: [], comparisonRate: [], colors: [] };
    for (let i = 0; i < this.props.fliteredHomeLoanList.length; i++) {
      data.labels.push(this.props.fliteredHomeLoanList[i].company.name);
      data.comparisonRate.push(
        this.props.fliteredHomeLoanList[i].comparisonRate
      );
      if (this.props.interestRate) {
        if (
          this.props.interestRate >
          this.props.fliteredHomeLoanList[i].comparisonRate
        ) {
          data.colors.push("red");
        } else if (
          this.props.interestRate <
          this.props.fliteredHomeLoanList[i].comparisonRate
        ) {
          data.colors.push("green");
        } else {
          data.colors.push("blue");
        }
      }
    }

    return (
      <div
        className="visualization-graph"
        style={{ height: "40vh", width: "90vw" }}
      >
        <Line
          data={{
            labels: data.labels ? data.labels : "",
            datasets: [
              {
                label: "Comparison interest rate",
                data: data ? data.comparisonRate : "",
                fill: false,
                borderColor: "#5B83C3",
                borderWidth: 2,
                pointBackgroundColor: data ? data.colors : "#4adbc8",
                pointRadius: 8,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Bank Names",
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  // scaleStepWidth: 50,
                  scaleLabel: {
                    display: true,
                    labelString: "Comparison Rate",
                  },
                  gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#c4c4c4",
                  },
                },
              ],
            },
            legend: {
              display: true,
              position: "top",
              align: "end",
              labels: {
                fontColor: "#33333",

                boxWidth: 10,
                padding: 20,
              },
            },
          }}
        />
      </div>
    );
  }
}
