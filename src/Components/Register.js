import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { signUp } from "../lib/aws-auth";
import Confirm from "./Confirm";
import { Form, ModalText, RegisterText } from "../constants/text";

export default function Register({ closeModal, setLogin, login }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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
          <b>{Form.EMAIL_LABEL}</b>
        </label>
        <input
          type="text"
          placeholder={Form.EMAIL_PLACEHOLDER}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="psw">
          <b>{Form.PASSWORD_LABEL}</b>
        </label>
        <input
          type="password"
          placeholder={Form.PASSWORD_PLACEHOLDER}
          name="psw"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {" "}
          {loading ? Form.LOADING : RegisterText.BUTTON}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          {ModalText.CANCEL}
        </button>
        <span className="psw">
          {RegisterText.SUGGESTION}
          <span className="link" onClick={() => setLogin(!login)}>
            {RegisterText.LINK}
          </span>
        </span>
      </div>
    </form>
  );
}
