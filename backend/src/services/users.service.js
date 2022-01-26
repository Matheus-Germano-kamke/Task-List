"use strict";

const { dbUsers } = require("../db/models");

async function creat(req, res) {
  console.log("sera");

  try {
    console.log("sera");
    return dbUsers.insertMany(req);

  }
  catch (err) {

  }
}

async function findByEmail(email) {
  try {
    return dbUsers.find({ email });
  }
  catch (err) {
    console.log(err)
  }
}

async function findById(userId) {
  try {
    return dbUsers.findById(userId);
  }
  catch (err) {
    console.log(err)
  }
}

async function findByUser(userId) {
  try {
    return dbUsers.find({ userId });
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  creat,
  findByEmail,
  findById,
  findByUser
};
