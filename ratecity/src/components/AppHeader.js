import React, { Component } from "react";
import "../styles/AppHeader.css";

export default class AppHeader extends Component {
  state = {
    selectedMenuOption: "All",
  };

  handleMenuClick = (e) => {
    console.log();
  };

  render() {
    const { selectedMenuOption } = this.state;
    return (
      <nav className="App-header-container">
        <div className="headline-text" id="top-home-loan-testcase">
          Top Home Loan Products
        </div>
        <div className="headline-menu">
          <div
            id="all-testcase"
            className={
              selectedMenuOption === "All" ? "selectedMenu" : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "All" });
            }}
          >
            ALL
          </div>
          <div
            id="refinance-testcase"
            className={
              selectedMenuOption === "REFINANCE"
                ? "selectedMenu"
                : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "REFINANCE" });
            }}
          >
            REFINANCE
          </div>
          <div
            id="fixed-rate-testcase"
            className={
              selectedMenuOption === "FIXED RATE"
                ? "selectedMenu"
                : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "FIXED RATE" });
            }}
          >
            FIXED RATE
          </div>
          <div
            id="first-home-buyer-testcase"
            className={
              selectedMenuOption === "FIRST HOME BUYER"
                ? "selectedMenu"
                : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "FIRST HOME BUYER" });
            }}
          >
            FIRST HOME BUYER
          </div>
          <div
            id="nvestor-testcase"
            className={
              selectedMenuOption === "NVESTOR"
                ? "selectedMenu"
                : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "NVESTOR" });
            }}
          >
            NVESTOR
          </div>
          <div
            id="next-home-buyer-testcase"
            className={
              selectedMenuOption === "NEXT HOME BUYER"
                ? "selectedMenu"
                : "unselectedMenu"
            }
            onClick={() => {
              this.setState({ selectedMenuOption: "NEXT HOME BUYER" });
            }}
          >
            NEXT HOME BUYER
          </div>
        </div>
      </nav>
    );
  }
}
