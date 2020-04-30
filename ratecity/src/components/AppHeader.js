import React, { Component } from "react";
import "../styles/AppHeader.css";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="App-header-container">
        <div className="headline-text" id="top-home-loan-testcase">
          Top Home Loan Products
        </div>
        <div className="headline-menu">
          <div id="all-testcase">ALL</div>
          <div id="refinance-testcase">REFINANCE</div>
          <div id="fixed-rate-testcase">FIXED RATE</div>
          <div id="first-home-buyer-testcase">FIRST HOME BUYER</div>
          <div id="nvestor-testcase">NVESTOR</div>
          <div id="next-home-buyer-testcase">NEXT HOME BUYER</div>
        </div>
      </div>
    );
  }
}
