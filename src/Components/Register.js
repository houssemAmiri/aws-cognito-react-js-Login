import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { signUp } from "../lib/aws-auth";
import Confirm from "./Confirm";
export default function Register({ closeModal, setLogin, login }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is email", email);
    console.log("this is password", password);
    signUp(email, password, email, confirm, setConfirm, setError, setLoading);
  };
  return confirm ? (
    <Confirm
      closeModal={closeModal}
      setRegister={setLogin}
      login={login}
      confirm={confirm}
      setConfirm={setConfirm}
    />
  ) : (
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
          {" "}
          {loading ? `Loading ....` : `Register`}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          Cancel
        </button>
        <span className="psw">
          Have you an account{" "}
          <span className="link" onClick={() => setLogin(!login)}>
            Sign in?
          </span>
        </span>
      </div>
    </form>
  );
}
