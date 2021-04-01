import React from "react";
import Modal from "react-modal";
import {
  AmplifySignUp,
  AmplifyAuthenticator,
  AmplifyGreetings,
} from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";
import logo from "../logo.svg";

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
function modal({ modalIsOpen, closeModal, subtitle }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>
          <AmplifyAuthenticator initialAuthState={AuthState.SignUp}>
            <AmplifySignUp
              headerText="hedhi registration :p can you make registration balise :p "
              usernameAlias="email"
              slot="sign-up"
            ></AmplifySignUp>
          </AmplifyAuthenticator>
        </div>
      </Modal>
    </div>
  );
}
export default modal;
