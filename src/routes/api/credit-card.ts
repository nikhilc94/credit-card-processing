import express from "express";

import CardModel from "../../../models/CreditCards";
import isCardValid from "../../utils/luhn";

const router = express.Router();

/**
 * @route: POST /api/credit-card/add-card.
 * @desc: Register a new credit card.
 */
router.post("/card", async (req, res) => {
  // Validate the credit card using luhn 10 algorithm.
  if (!isCardValid(req.body.cardNumber)) {
    return res
      .status(400)
      .json({ error: "The entered credit card is not valid." });
  }

  // Creating a new credit card document.
  const newCard = new CardModel({
    ...req.body,
    cardBalance: 0
  });

  // Saving the card to the database.
  try {
    await newCard.save();
    res.status(200).json({ payload: "Credit card saved successfully." });
  } catch (e) {
    return res.status(500).json({
      error:
        "The entered credit card could not be added due to a technical error."
    });
  }
});

/**
 * @route: GET /api/credit-card/list-cards.
 * @desc: List all saved credit cards.
 */
router.get("/card", async (req, res) => {
  try {
    const cards = await CardModel.find();
    res.status(200).json(cards);
  } catch (e) {
    return res.status(500).json({
      error:
        "There was a technical error while fetching the credit card information."
    });
  }
});

export default router;
