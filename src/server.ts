import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import creditCardRoutes from "./routes/api/credit-card";

// Creating the database connection.
mongoose
  .connect("mongodb://nikhilc1:nikhilc1@ds033831.mlab.com:33831/credit-cards", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err: object) => console.error(err));

const app = express();

app.use([cors(), bodyParser.json()]);

app.use("/api", creditCardRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

export default app;
