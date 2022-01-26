import api from "./axios.api";
import handleRequest from "./handle.request";

async function getPosts() {
  let user = null;

  try {
    const { data } = await api.get("/api/posts");
    user = data;
  } catch (error) {
    console.log(error);
    return "error";
  }
  return user;
}

async function creatPost(taskData) {
  return handleRequest(api.post("/api/post/creat", taskData));
}

export { creatPost, getPosts };
