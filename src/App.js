import React, { useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import Modal from "./Components/modal";
import "./App.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  const [token, setToken] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);
  React.useEffect(() => {
    if (authState === AuthState.SignedIn) {
      console.log("d5al");
      setIsOpen(false);
    }
    console.log("this authstate", authState);
  }, [authState]);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {authState === AuthState.SignedIn && user ? (
          <>
            <AmplifySignOut />
            <h1>This is your token: {token}</h1>
          </>
        ) : (
          <button onClick={openModal}>Login</button>
        )}
      </header>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        subtitle={subtitle}
      />
    </div>
  );
}

export default App;
