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
    currentPage: 1,
  };

  componentDidMount() {
    this.props.getHomeLoanProducts(1);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  incrementPageNumber = async () => {
    const { currentPage } = this.state;
    if (currentPage < 4) {
      this.setState({
        currentPage: currentPage + 1,
      });
      await this.props.getHomeLoanProducts(currentPage);
    }
  };
  decrementPageNumber = async () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
      await this.props.getHomeLoanProducts(currentPage);
    }
  };

  render() {
    const { isChecked, currentPage } = this.state;
    return (
      <div className="LoanProductList-container">
        {/* Pagination Code */}
        <div className="pagintion-container">
          {currentPage > 1 ? (
            <div
              onClick={this.decrementPageNumber}
              className="pagination-button"
            >
              Previous
            </div>
          ) : (
            <span className="faded-text">Previous</span>
          )}
          <span>{currentPage} 0f 4</span>
          {currentPage < 4 ? (
            <div
              onClick={this.incrementPageNumber}
              className="pagination-button"
            >
              Next
            </div>
          ) : (
            <span className="faded-text">Next</span>
          )}
        </div>

        <div className="list-of-products">
          {/* Single container */}
          {this.props.homeloan_products.hits
            ? this.props.homeloan_products.hits.map((each_product, index) => {
                return (
                  <div className="single-container" key={index}>
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
                        ? each_product.pros.map((pro, index) => {
                            return (
                              <div className="each-feature" key={index}>
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
