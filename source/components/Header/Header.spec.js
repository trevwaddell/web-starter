import React from "react";
import { shallow } from "enzyme";

import Header from "./index";

it("should render with breaking", () => {
  const wrapper = shallow(<Header>Test</Header>);
  expect(wrapper.text()).toContain("Test");
});
