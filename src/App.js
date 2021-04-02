import React, { useState } from "react";
import ModalComp from "./Components/ModalComp";
import { signOut } from "./lib/aws-auth";
import "./App.css";

function App() {
  const [authState, setAuthState] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const [token, setToken] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {authState && user ? (
          <>
            <button className="cancelbtn" onClick={() => signOut(setAuthState)}>
              Log out
            </button>
            <p>This is your token:</p>
            <p>{JSON.stringify(token)}</p>
          </>
        ) : (
          <button className="cancelbtn" onClick={openModal}>
            Login
          </button>
        )}
      </header>
      <ModalComp
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        setAuthState={setAuthState}
        setUser={setUser}
        setToken={setToken}
      />
    </div>
  );
}

export default App;
