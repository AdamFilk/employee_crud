const mongoose = require("mongoose");
const validator = require("validator");
const employeeSchema = mongoose.Schema(
  {
    employee_id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("The field has to be email.");
        }
      },
    },
    phone: {
      type: String,
      unique: true,
      require: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
