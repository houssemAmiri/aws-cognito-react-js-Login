import { Auth } from "aws-amplify";

async function signUp(
  username,
  password,
  email,
  confirm,
  setConfirm,
  setError,
  setLoading
) {
  try {
    setLoading(true);
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
    setConfirm(!confirm);
    setLoading(false);
  } catch (error) {
    setLoading(false);

    console.log("error signing up:", error);
    let err = null;
    err = error.message;
    setError(err);
  }
}

async function confirmSignUp(
  username,
  code,
  setConfirm,
  setLogin,
  setError,
  setLoading
) {
  try {
    setLoading(true);

    await Auth.confirmSignUp(username, code);
    setConfirm(false);
    setLogin(true);
    setLoading(false);
  } catch (error) {
    setLoading(false);

    console.log("error confirming sign up", error);
    let err = null;
    err = error.message;
    setError(err);
  }
}
async function signIn(
  email,
  password,
  closeModal,
  setAuthState,
  setUser,
  setError,
  setLoading,
  setToken
) {
  try {
    setLoading(true);
    const user = await Auth.signIn(email, password);
    setAuthState(true);
    console.log("This is user", user);
    setUser(user);
    setToken(user.signInUserSession.accessToken.jwtToken);
    closeModal();
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log("error signing in", error);
    let err = null;
    err = error.message;
    setError(err);
  }
}
async function signOut(setAuthState) {
  try {
    await Auth.signOut();
    setAuthState(false);
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
export { signUp, signIn, confirmSignUp, signOut };
