import React from "react";
import { signIn } from "../lib/aws-auth";
import "../App.css";
import logo from "../logo.svg";

export default function Login({
  closeModal,
  setRegister,
  login,
  setAuthState,
  setUser,
  setToken,
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(
      email,
      password,
      closeModal,
      setAuthState,
      setUser,
      setError,
      setLoading,
      setToken
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>
      {error && <span className="error">{error}</span>}

      <div className="container">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? `Loading ....` : `Login`}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          Cancel
        </button>
        <span className="psw">
          You don't Have an account ?{" "}
          <span className="link" onClick={() => setRegister(!login)}>
            Register?
          </span>
        </span>
      </div>
    </form>
  );
}
