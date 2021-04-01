import React from "react";
import "../App.css";
import logo from "../logo.svg";
export default function Login({ closeModal, setRegister, login }) {
  return (
    <form>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Username" name="email" required />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit">Login</button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          Cancel
        </button>
        <span className="psw">
          You don't Have an account ?{" "}
          <a onClick={() => setRegister(!login)}>Register?</a>
        </span>
      </div>
    </form>
  );
}
