import auth from "./auth.service";

export default async function handleRequest(fn) {
  // const authValidation = await auth();

  // console.log("authValidation: ", authValidation);

  // if (!authValidation) {
  //   return;
  // }

  try {
    const { data } = await fn;
    
    return data;
  } catch (error) {

    console.log( error)

    return { error: error.message };
  }
}
