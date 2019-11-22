import React, { useEffect } from "react";

import "./Table.css";
import fetchCards from "../utils/fetchCards";
import numberWithCommas from "../utils/numberWithCommas";

interface TableProps {
  cardDetails: {
    _id: string;
    name: string;
    cardNumber: string;
    cardLimit: Number;
    cardBalance: Number;
  }[];
  setCardDetails: Function;
}

const Table: React.FC<TableProps> = ({ cardDetails, setCardDetails }) => {
  useEffect(() => {
    fetchCards(setCardDetails);
    // eslint-disable-next-line
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Card Number</th>
          <th>Balance</th>
          <th>Limit</th>
        </tr>
      </thead>
      <tbody>
        {cardDetails.map(
          ({ _id, name, cardNumber, cardLimit, cardBalance }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{cardNumber}</td>
              <td>{numberWithCommas(cardBalance)}</td>
              <td>{numberWithCommas(cardLimit)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
