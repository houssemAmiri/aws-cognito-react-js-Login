import logo from "./logo.svg";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        My App
      </header>
    </div>
  );
}

export default withAuthenticator(App);
