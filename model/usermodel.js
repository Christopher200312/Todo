const chris = require("mongoose");

const userSchema = chris.Schema({
  name: {
    type: String,
  },
  population: {
    type: String,
  },
  gender: {
    type: String,
  },
  instructors: {
    type: String,
  },
  classrep: {
    type: String,
  },
});

const userModel = chris.model("SET07", userSchema);

module.exports = userSchema;
