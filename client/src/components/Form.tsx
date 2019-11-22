import axios from "axios";
import React, { useState } from "react";

import "./Form.css";
import fetchCards from "../utils/fetchCards";
import clientValidation from "../utils/clientValidation";

interface FormProps {
  setCardDetails: Function;
}

interface Event {
  persist: Function;
  target: any;
  preventDefault: Function;
}

const Form: React.FC<FormProps> = ({ setCardDetails }) => {
  const defaultState = {
    name: "",
    cardNumber: "",
    cardLimit: ""
  };

  const defaultErrorState: string[] = [];

  const [input, setInputDetails] = useState(defaultState);
  const [errors, setError] = useState(defaultErrorState);

  const handleInputChange = (e: Event) => {
    e.persist();
    setInputDetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError(defaultErrorState);
    const clientErrors = clientValidation(input);
    if (clientErrors.length > 0) {
      setError(clientErrors);
      return;
    }
    try {
      await axios.post("/api/card", input);
    } catch (e) {
      setError([e.response.data.error]);
      return;
    }
    setInputDetails(defaultState);
    fetchCards(setCardDetails);
  };

  return (
    <div className="form-container">
      {errors.length > 0 && (
        <ul>
          {errors.map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={input.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Card number
          <input
            type="number"
            name="cardNumber"
            required
            value={input.cardNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Limit
          <input
            type="number"
            name="cardLimit"
            required
            value={input.cardLimit}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
