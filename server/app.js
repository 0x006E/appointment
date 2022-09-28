import dotenv from "dotenv";
import express from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import AppointmentValidator from "./AppointmentValidator.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", AppointmentValidator, async (req, res) => {
  const { name, email, phone, date } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await Appointment.create(
    {
      name,
      email,
      phone,
      date,
    },
    (err, appointment) => {
      if (err) {
        return res.status(500).json({ error: err });
      } else {
        return res.status(200).json({ appointment });
      }
    }
  );

  return res.send({ name, email, phone, date });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
