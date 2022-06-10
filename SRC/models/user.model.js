const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  passaword: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
