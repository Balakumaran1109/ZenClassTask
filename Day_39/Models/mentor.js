const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const MentorModel = mongoose.model("Mentor", mentorSchema);

module.exports = MentorModel;
