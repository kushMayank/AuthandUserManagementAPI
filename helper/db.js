const config = require("config.json");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/node-mongo-registration-login-api",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
};
