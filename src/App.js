import React, { useState } from "react";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        {logged ? <h1>This is your token: {token}</h1> : <button>Login</button>}
      </header>
    </div>
  );
}

export default App;
