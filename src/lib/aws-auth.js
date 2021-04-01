import { Auth } from "aws-amplify";

async function signUp(username, password, email, phone_number) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function signIn(email, password) {
  try {
    const user = await Auth.signIn(email, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}

export { signUp, signIn };
