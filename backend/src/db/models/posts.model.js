"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    creationDate: { type: Date, default: Date.now },
    text: { type: String },
    email: { type: String, required: true },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const post = mongoose.model("Post", schema);

module.exports = post;
