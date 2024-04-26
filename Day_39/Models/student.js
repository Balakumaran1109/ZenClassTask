const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  cMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  pMentor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }],
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
