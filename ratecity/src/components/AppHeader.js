import React, { Component } from "react";
import "../styles/AppHeader.css";
import LoanProductList from "./LoanProductList";

export default class AppHeader extends Component {
  state = {
    selectedMenuOption: "ALL",
    headerMenuItems: [
      "ALL",
      "REFINANCE",
      // "FIXED RATE",
      "FIRST HOME BUYER",
      "NVESTOR",
      // "NEXT HOME BUYER",
    ],
  };

  render() {
    const { selectedMenuOption, headerMenuItems } = this.state;
    return (
      <div>
        <nav className="App-header-container">
          <header className="headline-text" id="top-home-loan-testcase">
            Top Home Loan Products
          </header>
          <div className="headline-menu">
            {/* Mapping the list of menus to the division */}
            {headerMenuItems.map((menu, index) => (
              <div
                id={menu}
                key={index}
                className={
                  selectedMenuOption === menu
                    ? "selectedMenu"
                    : "unselectedMenu"
                }
                onClick={() => {
                  this.setState({ selectedMenuOption: menu });
                }}
              >
                {menu}
              </div>
            ))}
          </div>
        </nav>
        <LoanProductList selectedMenuOption={selectedMenuOption} />
      </div>
    );
  }
}
