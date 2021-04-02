import React from "react";
import Modal from "react-modal";
import Login from "./Login";
import Register from "./Register";
import { ModalText } from "../constants/text";
// Modal configuration
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function ModalComp({
  modalIsOpen,
  closeModal,
  setAuthState,
  setUser,
  setToken,
}) {
  const [login, setLogin] = React.useState(false);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>{login ? ModalText.LOGIN : ModalText.REGISTER}</h2>
        <div>
          {login ? (
            <Login
              closeModal={closeModal}
              setRegister={setLogin}
              login={login}
              setAuthState={setAuthState}
              setUser={setUser}
              setToken={setToken}
            />
          ) : (
            <Register
              closeModal={closeModal}
              setLogin={setLogin}
              login={login}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}
export default ModalComp;
