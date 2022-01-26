var mongoose = require("mongoose");

module.exports = (userId) => {
  return {
    text: "test text",
    userId: userId || mongoose.Types.ObjectId(),
    name: "sdsdsd",
    email: "test@test.com",
  };
};
