import React, { Component } from "react";
import "../styles/LoanProductList.css";
import correctTick from "../assests/images/correct-tick.png";
import rightArrow from "../assests/images/right-arrow.png";
import { connect } from "react-redux";
import Spinner from "./Spinner";
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
    const { homeloan_products, selectedMenuOption } = this.props;

    let fliteredHomeLoanList = [];
    if (homeloan_products.hits) {
      fliteredHomeLoanList = homeloan_products.hits.filter((product) => {
        return selectedMenuOption === "REFINANCE"
          ? product.isRefinanceAvailable === true
          : selectedMenuOption === "FIRST HOME BUYER"
          ? product.isFirstHomeBuyersAvailable === true
          : selectedMenuOption === "NVESTOR"
          ? product.investmentPurpose === true
          : true;
      });
    }
    console.log("fliteredHomeLoanList: ", fliteredHomeLoanList);

    return (
      <div className="LoanProductList-container">
        {/* Pagination Code */}
        {/* If there is any products list then only showing the pagination */}
        {fliteredHomeLoanList ? (
          <div className="pagintion-container">
            {/* If showing first page then previous button will be faded or text */}
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
            {/* showing the current page */}
            <span style={{ padding: "0 10px", margin: "5px 5px" }}>
              {currentPage} of 4
            </span>
            {/* If showing last page then Next button will be faded or text */}
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
        ) : null}
        {this.props.isloading ? (
          <Spinner />
        ) : (
          <div className="list-of-products">
            {/* Single container */}
            {fliteredHomeLoanList.length > 0 ? (
              // mapping the product list received from backend
              fliteredHomeLoanList.map((each_product, index) => {
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
                      {/* mapping the products */}
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
                      {/* added link of product site  */}
                      <a
                        className="go-to-site-button"
                        href={each_product.gotoSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>Go to Site</div>
                        <img
                          className="right-arrow-icon"
                          src={rightArrow}
                          height="18px"
                          alt="->"
                        />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-products-found">
                No product found or please check your internet connection.
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  homeloan_products: state.homeLoanProductsReduer.homeloan_products,
  isloading: state.LoadingReducer.isLoading,
});

export default connect(mapStateToProps, {
  getHomeLoanProducts,
})(LoanProductList);
