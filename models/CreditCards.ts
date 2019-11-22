const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cardLimit: {
    type: Number,
    required: true
  },
  cardBalance: {
    type: Number,
    required: true
  }
});

const CardModel = mongoose.model("card", cardSchema);
export default CardModel;
