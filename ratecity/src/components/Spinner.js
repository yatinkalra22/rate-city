import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Spinner extends Component {
  render() {
    return (
      <div
        className="loader-position"
        style={{
          height: 400 + "px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Loader type="Oval" color="#615756" height="50px" width="200px" />
          <span
            style={{
              marginTop: "40px",
              color: "#615756",
            }}
          >
            Loading the product list...
          </span>
        </div>
      </div>
    );
  }
}
