import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import AppointmentValidator from "./AppointmentValidator.js";
import Appointment from "./models/Appointment.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post("/", AppointmentValidator, async (req, res) => {
  const { name, email, phone, date } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const appointment = await Appointment.create({
      name,
      email,
      phone,
      date,
    });
    return res.status(200).json({ appointment });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
