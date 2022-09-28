import { checkSchema } from "express-validator";
const validator = checkSchema({
  name: {
    isString: true,
    errorMessage: "Name is invalid",
    in: ["body"],
  },
  email: {
    isEmail: true,
    errorMessage: "Email is invalid",
    in: ["body"],
  },
  phone: {
    isMobilePhone: true,
    errorMessage: "Phone is invalid",
    in: ["body"],
  },
  date: {
    isDate: true,
    errorMessage: "Date is invalid",
    toDate: true,
    in: ["body"],
  },
});

export default validator;
