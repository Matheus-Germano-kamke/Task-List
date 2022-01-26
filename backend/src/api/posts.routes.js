const express = require("express");
const services = require("../services");

const router = express.Router();

router.get("/api/posts", async (req, res) => {
  try {
    const posts = await services.posts.find();
    res.send(posts);
  } catch (error) {
    console.log("error");
    return res.status(400).json({ msg: "Invalid credentials." });
  }
});

router.post("/api/post/creat", async (req, res) => {
  const { body } = req;

  const email = body.email;

  const [user] = await services.users.findByEmail(email);

  await services.posts.creat({
    text: body.msg,
    email,
    name: user.name,
  });

  const posts = await services.posts.find(email);

  res.send(posts);
});

router.delete("/api/post/delete", async (req, res) => {
  const { params } = req;

  const { postId } = params;
  const posts = await services.posts.removeById(postId);

  res.send(posts);
});

router.post("/api/post/update", async (req, res) => {
  const { params, body } = req;

  const { postId } = params;

  const postUpdated = await services.posts.update(postId, body);

  const posts = await services.posts.findByUser(postUpdated.userId);

  res.send(posts);
});

module.exports = router;
