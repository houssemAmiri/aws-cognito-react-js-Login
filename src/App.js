import React, { useState } from "react";
import ModalComp from "./Components/ModalComp";
import { signOut } from "./lib/aws-auth";
import "./App.css";
import { Home } from "./constants/text";
function App() {
  // state
  const [authState, setAuthState] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // open modal function
  function openModal() {
    setIsOpen(true);
  }

  // close modal function
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {authState && user ? (
          <>
            <button className="cancelbtn" onClick={() => signOut(setAuthState)}>
              {Home.LOGOUT}
            </button>
            <p>{Home.TOKEN}</p>
            <p>{token}</p>
          </>
        ) : (
          <button className="cancelbtn" onClick={openModal}>
            {Home.LOGIN}
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
