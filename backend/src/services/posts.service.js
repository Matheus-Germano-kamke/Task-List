"use strict";

const { dbPosts } = require("../db/models");

exports.creat = function creat(postData) {

  console.log("postData: ", postData)

  return dbPosts.insertMany(postData);
};

exports.find = function find() {
  return dbPosts.find();
};

exports.removeById = function removeById(postId) {
  return dbPosts.deleteOne({ _id: postId });
};

exports.update = function update(postId, postData) {
  return dbPosts.findOneAndUpdate({ _id: postId }, postData, {
    new: true,
  });
};
