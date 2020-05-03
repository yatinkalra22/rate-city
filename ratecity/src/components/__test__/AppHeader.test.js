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
    expect(wrapper.find("#ALL").text()).toBe("ALL");
    expect(wrapper.find("#REFINANCE").text()).toBe("REFINANCE");
    // expect(wrapper.find("#FIRST HOME BUYER").text()).toBe("FIRST HOME BUYER");
    expect(wrapper.find("#NVESTOR").text()).toBe("NVESTOR");
  });

  it("should have a default state selected value and headerMenuItems", () => {
    expect(wrapper.state().selectedMenuOption).toBe("ALL");
    expect(typeof wrapper.state().headerMenuItems).toBe("object");
    expect(wrapper.state().headerMenuItems).toHaveLength(4);
  });
  it("should should be clickable and state must change to the selected value", () => {
    wrapper.find("#ALL").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("ALL");
    wrapper.find("#REFINANCE").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("REFINANCE");
    // wrapper.find("#FIRST HOME BUYER").simulate("click");
    // expect(wrapper.state().selectedMenuOption).toBe("FIRST HOME BUYER");
    wrapper.find("#NVESTOR").simulate("click");
    expect(wrapper.state().selectedMenuOption).toBe("NVESTOR");
  });
});
