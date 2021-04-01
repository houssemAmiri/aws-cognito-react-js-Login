import React, { useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";

import ModalComp from "./Components/ModalComp";
import "./App.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  const [token, setToken] = useState("");
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
      Auth.currentSession().then((res) => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();
        //You can print them to see the full objects
        //console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
        setToken(jwt);
        //console.log(`myJwt: ${jwt}`);
      });
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
        subtitle={subtitle}
      />
    </div>
  );
}

export default App;
