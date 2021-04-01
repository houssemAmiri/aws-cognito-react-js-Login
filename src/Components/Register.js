import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { signUp } from "../lib/aws-auth";
export default function Register({ closeModal, setLogin, login }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is email", email);
    console.log("this is password", password);
    signUp(email, password, email);
  };
  return confirm ? (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>
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

        <button type="submit">Register</button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          Cancel
        </button>
        <span className="psw">
          Have you an account <a onClick={() => setLogin(!login)}>Sign in?</a>
        </span>
      </div>
    </form>
  ) : (
    <h1>this confirm</h1>
  );
}
