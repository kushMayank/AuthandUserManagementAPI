const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myapps", {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
};
