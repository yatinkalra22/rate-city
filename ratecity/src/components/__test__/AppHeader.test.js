import React from "react";
import { shallow } from "enzyme";
import AppHeader from "../../components/AppHeader";

const wrapper = shallow(<AppHeader />);

describe("AppHeader Component", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have 'Top Home Loan Products' as the headerText ", () => {
    expect(wrapper.find("#top-home-loan-testcase").text()).toBe(
      "Top Home Loan Products"
    );
  });
  it("should have multiple Text in the headLine menu ", () => {
    expect(wrapper.find("#all-testcase").text()).toBe("ALL");
    expect(wrapper.find("#refinance-testcase").text()).toBe("REFINANCE");
    expect(wrapper.find("#fixed-rate-testcase").text()).toBe("FIXED RATE");
    expect(wrapper.find("#first-home-buyer-testcase").text()).toBe(
      "FIRST HOME BUYER"
    );
    expect(wrapper.find("#nvestor-testcase").text()).toBe("NVESTOR");
    expect(wrapper.find("#next-home-buyer-testcase").text()).toBe(
      "NEXT HOME BUYER"
    );
  });

  it("should have a default selected value as All", () => {
    expect(wrapper.state().selectedMenuOption).toBe("All");
  });
  it("should should be clickable and state must change to the selected value", () => {
    wrapper.find("#all-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("All");
    wrapper.find("#refinance-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("REFINANCE");
    wrapper.find("#fixed-rate-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("FIXED RATE");
    wrapper.find("#first-home-buyer-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("FIRST HOME BUYER");
    wrapper.find("#nvestor-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("NVESTOR");
    wrapper.find("#next-home-buyer-testcase").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("NEXT HOME BUYER");
  });
});
