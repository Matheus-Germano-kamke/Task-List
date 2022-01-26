import Axios from "axios";
import Cookies from "js-cookie";

export default async function auth() {
  const userToken = Cookies.get("userToken");

  console.log("userToken: ", userToken)

  const { data: authValidation } = await Axios.post("/api/auth", {
    headers: {
      Authorization: userToken,
    },
  });

  return authValidation;
}
