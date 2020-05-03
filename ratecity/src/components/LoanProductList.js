import React, { Component } from "react";
import "../styles/LoanProductList.css";
import correctTick from "../assests/images/correct-tick.png";
import rightArrow from "../assests/images/right-arrow.png";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { getHomeLoanProducts } from "../actions/HomeLoanProducts";
import VisualizationGraph from "./VisualizationGraph";

export class LoanProductList extends Component {
  state = {
    comparedCheckBox: [],
    compareCheckBoxNumber: 3,
    visualizationCheckBox: false,
    currentPage: 1,
    maximumPage: 4,
    minimumPage: 1,
    interestRate: "",
  };

  // calling the api to fetch first page
  componentDidMount() {
    this.props.getHomeLoanProducts(this.state.currentPage);
  }

  // incrementing the page count
  incrementPageNumber = async () => {
    const { currentPage, maximumPage } = this.state;
    if (currentPage < maximumPage) {
      this.setState({
        currentPage: currentPage + 1,
      });
      await this.props.getHomeLoanProducts(currentPage);
    }
  };

  // decrementing the page count
  decrementPageNumber = async () => {
    const { currentPage, minimumPage } = this.state;
    if (currentPage > minimumPage) {
      this.setState({
        currentPage: currentPage - 1,
      });
      await this.props.getHomeLoanProducts(currentPage);
    }
  };

  // when compare button is pressed then, then checkbox is set to be true, only for 3 check box will be selected.
  toggleCompareChange = (uuid) => {
    const { comparedCheckBox, compareCheckBoxNumber } = this.state;
    let newComparedCheckBox = comparedCheckBox;
    if (!newComparedCheckBox.includes(uuid)) {
      if (comparedCheckBox.length < compareCheckBoxNumber) {
        // pushing only 3 selected checkbox to the array
        newComparedCheckBox.push(uuid);
        this.setState({
          comparedCheckBox: newComparedCheckBox,
        });
      }
    } else {
      // if already present then removing from the array
      newComparedCheckBox.splice(newComparedCheckBox.indexOf(uuid), 1);
      this.setState({
        comparedCheckBox: newComparedCheckBox,
      });
    }
  };

  toggleVisualizationChange = () => {
    this.setState({
      visualizationCheckBox: !this.state.visualizationCheckBox,
    });
  };

  onChange = (event) => {
    if (event.target.value >= 0 && event.target.value <= 100) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { comparedCheckBox, currentPage, visualizationCheckBox } = this.state;
    const { homeloan_products, selectedMenuOption } = this.props;
    // api response is filtered based on the menu selected item
    let fliteredHomeLoanList = [];
    if (homeloan_products.hits) {
      fliteredHomeLoanList = homeloan_products.hits.filter((product) => {
        return selectedMenuOption === "REFINANCE"
          ? product.isRefinanceAvailable === true
          : selectedMenuOption === "FIRST HOME BUYER"
          ? product.isFirstHomeBuyersAvailable === true
          : selectedMenuOption === "INVESTOR"
          ? product.investmentPurpose === true
          : true;
      });
    }

    return (
      <div className="LoanProductList-container">
        {/* Pagination Code */}
        {/* If there is any products list then only showing the pagination */}
        {fliteredHomeLoanList.length > 0 ? (
          <div className="pagination-graph-container">
            <div className="pagintion-container">
              {/* If showing first page then previous button will be faded/text */}
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
              {/* If showing last page then Next button will be faded/text */}
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
            {/* Visualization option */}
            <div className="visualization-container">
              <div> Visualizatin</div>
              <input
                className="visualization-checkbox"
                type="checkbox"
                checked={visualizationCheckBox}
                onChange={this.toggleVisualizationChange}
              />
            </div>
          </div>
        ) : null}
        {/* Graph of the application */}
        {visualizationCheckBox ? (
          <div className="graph-container">
            <div>
              <div style={{ display: "flex" }}>
                <input
                  className="interst-rate-input"
                  type="text"
                  placeholder="Enter your interest rate"
                  onChange={this.onChange}
                  name="interestRate"
                  value={this.state.interestRate}
                />
                <div
                  // onClick={this.incrementPageNumber}
                  className="search-button"
                >
                  Compare
                </div>
              </div>
              <VisualizationGraph />
            </div>
          </div>
        ) : null}
        {/* if api is called then showing the loader */}
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
                          checked={
                            comparedCheckBox.length > 0
                              ? this.state.comparedCheckBox.includes(
                                  each_product.uuid
                                )
                              : false
                          }
                          onChange={() =>
                            this.toggleCompareChange(each_product.uuid)
                          }
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
                      {/* added link of product site, when clicked it will be redirected  */}
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
              // showing message whc=en api response is empty
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

// mapping redux store state
const mapStateToProps = (state) => ({
  homeloan_products: state.homeLoanProductsReduer.homeloan_products,
  isloading: state.LoadingReducer.isLoading,
});

export default connect(mapStateToProps, {
  getHomeLoanProducts,
})(LoanProductList);
