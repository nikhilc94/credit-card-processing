import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";

import App from "./App";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("App component", () => {
  it("renders successfully", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
