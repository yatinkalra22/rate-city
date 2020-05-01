import React, { Component } from "react";
import "../styles/LoanProductList.css";
import correctTick from "../assests/images/correct-tick.png";
import rightArrow from "../assests/images/right-arrow.png";

export default class LoanProductList extends Component {
  state = {
    isChecked: false,
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { isChecked } = this.state;
    return (
      <div className="LoanProductList-container">
        <div className="single-container">
          <div className="headline">
            Discount Offer Variable Home Loan OO P&I ($200k+)
          </div>
          {/* Rating Container */}
          <div className="rating-box">
            <div>
              <div className="rating-title">Advertised rate</div>
              <div className="rating-percentage">3.74%</div>
            </div>
            <div>
              <div className="rating-title">Comparison rate</div>
              <div className="rating-percentage">3.74%</div>
            </div>
          </div>
          {/* List of features */}
          <div className="features">
            <div className="each-feature">
              <img src={correctTick} height="20px" />
              <div className="feature-text">
                Repayments may decrease if RBA cuts rates
              </div>
            </div>
            <div className="each-feature">
              <img src={correctTick} height="20px" />
              <div className="feature-text">Repayments may decrease if RBA</div>
            </div>
            <div className="each-feature">
              <img src={correctTick} height="20px" />
              <div className="feature-text">Repayments may decrease if</div>
            </div>
            <div className="each-feature">
              <img src={correctTick} height="20px" />
              <div className="feature-text">
                Repayments may decrease if RBA cuts rates
              </div>
            </div>
          </div>
          {/* Compare and more info*/}
          <div className="compare-with-info">
            <div className="checkbox-with-message">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={this.toggleChange}
                className="checkbox"
              />
              <div>Compare</div>
            </div>
            <div className="info-text">More information</div>
          </div>
          <div className="go-to-site-container">
            <img
              className="go-to-profile-image"
              src={
                "//production-ultimate-assets.ratecity.com.au/ratecity/image/upload/v1582525320/company/lf9ws3nziddktpbbdtof.png"
              }
              height="25px"
              width="125px"
            />

            <div className="go-to-site-button">
              <div>Go to Site</div>
              <img
                className="right-arrow-icon"
                src={rightArrow}
                height="18px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
