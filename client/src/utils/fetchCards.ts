import axios from "axios";

export default async function fetchCards(setCardDetails: Function) {
  const response = await axios.get("/api/card");
  setCardDetails(response.data);
}
