import React from "react";
import { signIn } from "../lib/aws-auth";
import "../App.css";
import logo from "../logo.svg";
import { Form, ModalText, LoginText } from "../constants/text";

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
          {loading ? Form.LOADING : LoginText.BUTTON}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          {ModalText.CANCEL}
        </button>
        <span className="psw">
          {LoginText.SUGGESTION}
          <span className="link" onClick={() => setRegister(!login)}>
            {LoginText.LINK}
          </span>
        </span>
      </div>
    </form>
  );
}
