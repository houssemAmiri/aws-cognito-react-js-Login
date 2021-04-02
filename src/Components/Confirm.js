import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { confirmSignUp } from "../lib/aws-auth";
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
      <h1>Confirmation</h1>
      {error && <span className="error">{error}</span>}

      <div className="container">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="uname">
          <b>code confirmation</b>
        </label>
        <input
          type="text"
          placeholder="Enter confirmation code"
          name="confirmation_code"
          onChange={(e) => setConfirmationCode(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {" "}
          {loading ? `Loading ....` : `Confirm`}
        </button>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={closeModal}>
          Cancel
        </button>
        <span className="psw">
          You wan't to register again ?{" "}
          <span
            className="link"
            onClick={() => {
              setRegister(false);
              setConfirm(false);
            }}
          >
            Register?
          </span>
        </span>
      </div>
    </form>
  );
}
