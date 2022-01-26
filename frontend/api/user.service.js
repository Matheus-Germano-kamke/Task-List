import api from "./axios.api";

async function creatUser(userData) {
  let user = null;

  try {
    console.log("a");
    const { data } = await api.post("/api/creatUser", userData);
    console.log("b");
    user = data.userDetails;
  } catch (error) {
    console.log(error);
  }
}

async function login(userData) {
  let user = null;

  try {
    const { data } = await api.post("/api/login", userData);

    user = data;
    return user;
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export { creatUser, login };
