import React, { Component } from "react";
import "../styles/LoanProductList.css";
import correctTick from "../assests/images/correct-tick.png";
import rightArrow from "../assests/images/right-arrow.png";
import { connect } from "react-redux";
import { getHomeLoanProducts } from "../actions/HomeLoanProducts";

export class LoanProductList extends Component {
  state = {
    isChecked: false,
    comparedCheckBox: [],
  };

  componentDidMount() {
    this.props.getHomeLoanProducts(1);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { isChecked } = this.state;

    return (
      <div className="LoanProductList-container">
        <div className="list-of-products">
          {/* Single container */}
          {this.props.homeloan_products.hits
            ? this.props.homeloan_products.hits.map((each_product) => {
                return (
                  <div className="single-container">
                    <div className="headline">{each_product.name}</div>
                    {/* Rating Container */}
                    <div className="rating-box">
                      <div>
                        <div className="rating-title">Advertised rate</div>
                        <div className="rating-percentage">
                          {each_product.advertisedRate}%
                        </div>
                      </div>
                      <div>
                        <div className="rating-title">Comparison rate</div>
                        <div className="rating-percentage">
                          {each_product.comparisonRate}%
                        </div>
                      </div>
                    </div>
                    {/* List of features */}
                    <div className="features">
                      {each_product.pros
                        ? each_product.pros.map((pro) => {
                            return (
                              <div className="each-feature">
                                <img src={correctTick} height="20px" alt="_/" />
                                <div className="feature-text">{pro}</div>
                              </div>
                            );
                          })
                        : null}
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
                        src={each_product.company.logo}
                        alt="Company Name"
                        height="30px"
                        width="125px"
                      />

                      <div className="go-to-site-button">
                        <div>Go to Site</div>
                        <img
                          className="right-arrow-icon"
                          src={rightArrow}
                          height="18px"
                          alt="->"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  homeloan_products: state.homeLoanProductsReduer.homeloan_products,
});

export default connect(mapStateToProps, {
  getHomeLoanProducts,
})(LoanProductList);
