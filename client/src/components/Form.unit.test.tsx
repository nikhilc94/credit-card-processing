import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";

import Form from "./Form";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Form component", () => {
  it("renders successfully", () => {
    const wrapper = shallow(<Form setCardDetails={() => null} />);
    expect(wrapper).toMatchSnapshot();
  });
});
