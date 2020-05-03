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
        <Loader type="Oval" color="#615756" height="80px" width="250px" />
        <span
          style={{
            marginTop: "10px",
            color: "#615756",
          }}
        >
          Loading the product list...
        </span>
      </div>
    );
  }
}
