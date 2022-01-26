"use strict";

const services = require("../../services");
const testWithDb = require("../teste-with-db");
const { posts } = require("../fixtures");

testWithDb(() => {
  describe("Post", () => {
    it("Post: a new post ", async () => {
      const postsData = posts();

      const [createdPost] = await services.posts.creat(postsData);

      const { _id, creationDate, text, email, name } = createdPost._doc;

      expect(createdPost._doc).toEqual({
        ...postsData,
        _id,
        creationDate,
        text,
        email,
        name,
      });
    });

    it("find: ", async () => {
      const postsData = posts();

      const [createdPost] = await services.posts.find();

      expect(createdPost._doc).toEqual(createdPost._doc);
    });

    it("remove: ", async () => {
      const postsData = posts();

      const [createdPost] = await services.posts.creat(postsData);

      const { _id: postId } = createdPost._doc;

      const [post] = await services.posts.removeById(postId);

      expect(post._doc).toEqual(createdPost._doc);
    });

    it("update: ", async () => {
      const postsData = posts();

      const [createdPost] = await services.posts.creat(postsData);

      const { _id: postId } = createdPost._doc;

      const newText = "new text";

      const postUpdated = await services.posts.update(postId, {
        text: newText,
      });

      expect(postUpdated._doc.text).toEqual(newText);
    });
  });
});
