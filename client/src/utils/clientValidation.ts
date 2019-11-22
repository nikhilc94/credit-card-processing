export default function clientValidation({
  name,
  cardNumber,
  cardLimit
}: {
  name: string;
  cardNumber: string;
  cardLimit: string;
}) {
  const errors: string[] = [];
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    errors.push("Name is invalid.");
  }
  if (cardNumber.length !== 10) {
    errors.push("Length of the credit card number must be 10.");
  }
  if (parseInt(cardLimit) < 0) {
    errors.push("Card limit must be greater than 0.");
  }
  return errors;
}
