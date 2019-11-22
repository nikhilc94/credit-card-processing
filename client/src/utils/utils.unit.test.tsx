import clientValidation from "./clientValidation";

describe("Client validation for form", () => {
  it("returns error if name is invalid.", () => {
    const errors = clientValidation({
      name: "Test 123",
      cardNumber: "4567832453",
      cardLimit: "4500"
    });
    expect(errors).toContain("Name is invalid.");
  });

  it("returns error if credit card number is invalid.", () => {
    const errors = clientValidation({
      name: "Test",
      cardNumber: "45832453",
      cardLimit: "4500"
    });
    expect(errors).toContain("Length of the credit card number must be 10.");
  });

  it("returns error if credit card limit is invalid.", () => {
    const errors = clientValidation({
      name: "Test",
      cardNumber: "4567832453",
      cardLimit: "-4500"
    });
    expect(errors).toContain("Card limit must be greater than 0.");
  });

  it("returns no errors if all information is correct.", () => {
    const errors = clientValidation({
      name: "Test",
      cardNumber: "4567832453",
      cardLimit: "4500"
    });
    expect(errors.length).toBe(0);
  });
});
