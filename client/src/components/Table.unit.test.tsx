import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";

import Table from "./Table";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const testData = [
  {
    _id: "djedhednwjksnwjwhw_ww",
    name: "Test user",
    cardNumber: "4567834619",
    cardLimit: 3500,
    cardBalance: 0
  },
  {
    _id: "mnfgeyyyyyssnwjwhw3d",
    name: "Test user second",
    cardNumber: "0964387189",
    cardLimit: 10000,
    cardBalance: 0
  }
];

describe("Table component", () => {
  it("renders successfully", () => {
    const wrapper = shallow(
      <Table cardDetails={testData} setCardDetails={() => null} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
