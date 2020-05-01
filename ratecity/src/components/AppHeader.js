import React, { Component } from "react";
import "../styles/AppHeader.css";

export default class AppHeader extends Component {
  state = {
    selectedMenuOption: "All",
    headerMenuItems: [
      "All",
      "REFINANCE",
      "FIXED RATE",
      "FIRST HOME BUYER",
      "NVESTOR",
      "NEXT HOME BUYER",
    ],
  };

  render() {
    const { selectedMenuOption, headerMenuItems } = this.state;
    return (
      <nav className="App-header-container">
        <header className="headline-text" id="top-home-loan-testcase">
          Top Home Loan Products
        </header>
        <div className="headline-menu">
          {/* Mapping the list of menus to the division */}
          {headerMenuItems.map((menu) => (
            <div
              id={menu}
              key={menu}
              className={
                selectedMenuOption === menu ? "selectedMenu" : "unselectedMenu"
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
    );
  }
}
