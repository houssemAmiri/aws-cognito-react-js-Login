import React from "react";
import Modal from "react-modal";
import {
  AmplifySignUp,
  AmplifyAuthenticator,
  AmplifyGreetings,
} from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";
import Login from "./Login";
import Register from "./Register";
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
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{login ? `Please login` : `please register`}</h2>
        <div>
          {/*
          <AmplifyAuthenticator initialAuthState={AuthState.SignUp}>
            <AmplifySignUp
              headerText="hedhi registration :p can you make registration balise :p "
              usernameAlias="email"
              slot="sign-up"
            ></AmplifySignUp>
          </AmplifyAuthenticator>
                */}
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
