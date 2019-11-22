import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App: React.FC = () => {
  const [cardDetails, setCardDetails] = useState([]);

  return (
    <div className="app-container">
      <h2>Credit Card System</h2>
      <h3>Add</h3>
      <Form setCardDetails={setCardDetails} />
      <h3>Existing Cards</h3>
      <Table cardDetails={cardDetails} setCardDetails={setCardDetails} />
    </div>
  );
};

export default App;
