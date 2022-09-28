import { model, Schema } from "mongoose";
import validator from "validator";

const appointmentSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    validate: [validator.isEmail, "invalid email"],
    required: true,
  },
  phone: {
    type: String,
    validate: [validator.isMobilePhone, "invalid phone number"],
  },
  date: { type: Date, required: true },
});
const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
