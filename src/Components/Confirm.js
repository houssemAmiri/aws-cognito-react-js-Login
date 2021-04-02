import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { confirmSignUp } from "../lib/aws-auth";
import { Form, ModalText, ConfirmationText } from "../constants/text";

export default function Confirm({
  closeModal,
  setRegister,
  login,
  confirm,
  setConfirm,
}) {
  const [confirmationCode, setConfirmationCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmSignUp(
      email,
      confirmationCode,
      setConfirm,
      setRegister,
      setError,
      setLoading
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>
      <h1>{ConfirmationText.TITLE}</h1>
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
        <label htmlFor="uname">
          <b>{Form.CONFIRMATION_CODE_LABEL}</b>
        </label>
        <input
          type="text"
          placeholder={Form.CONFIRMATION_CODE_PLACEHOLDER}
          name="confirmation_code"
          onChange={(e) => setConfirmationCode(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {" "}
          {loading ? Form.LOADING : `Confirm`}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          {ModalText.CANCEL}
        </button>
        <span className="psw">
          {ConfirmationText.SUGGESTION}{" "}
          <span
            className="link"
            onClick={() => {
              setRegister(false);
              setConfirm(false);
            }}
          >
            {ConfirmationText.LINK}
          </span>
        </span>
      </div>
    </form>
  );
}
