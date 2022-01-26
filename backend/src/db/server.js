"use strict";

const mongoose = require("mongoose");
const mongoConfig = require("../configs/mongo.config");
const expresslistener = require("./express.server");

async function mongoServer() {
  if (mongoose.connection.readyState != 0) {
    console.log("opa");
    return mongoose;
  }

  try {
    mongoose.connect(mongoConfig.urlConection);

    expresslistener();
    console.log("aki");
  } catch (err) {
    console.log(err);
  }
  console.log("aki3");
  return new Promise((resolve) => {
    mongoose.connection.on("open", function (ref) {
      return resolve(mongoose);
    });
  });
}

mongoServer();
