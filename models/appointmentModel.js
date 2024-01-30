const mongoose = require("mongoose");
const appointSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    doctorInfo: {
      type: Object,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const appointmentModel = mongoose.model("appointments", appointSchema);
module.exports = appointmentModel;
