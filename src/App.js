import React, { useState } from "react";

import Modal from "./Components/modal";
import "./App.css";

function App() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        {logged ? (
          <h1>This is your token: {token}</h1>
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
