import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { name, email, phone, date } = req.body;

  return res.send({ name, email, phone, date });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
