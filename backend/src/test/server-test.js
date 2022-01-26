"use strict";

const mongoose = require("mongoose");
const mongoConfig = require("../configs/mongo.config");
const expresslistener = require("../db/express.server");

module.exports = async function mongoServer() {
  if (mongoose.connection.readyState != 0) {
    return mongoose;
  }

  try {
    mongoose.connect(mongoConfig.urlConection);

    expresslistener();
  } catch (err) {
    console.log(err);
  }

  return new Promise((resolve) => {
    mongoose.connection.on("open", function (ref) {
      return resolve(mongoose);
    });
  });
};

// mongoServer();
