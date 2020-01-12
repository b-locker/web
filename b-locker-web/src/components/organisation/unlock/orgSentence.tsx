import React from "react";
import "./orgUnlock.scss";

import logo from "../../../assets/logo.png";

import { useHistory } from "react-router";

const OrgSentence: React.FC = () => {
  let history = useHistory();
  const sentence = "I confirm I will be unlocking all lockers"

  function redirectSuccess(e: any) {
    history.push("/success");
  }

  return (
    <div className="main-div-org-no-nav">
      
      <div className="center-flex-container">
      <img className="logo" src={logo} alt="" />
        <div className="content-container">
            <h2>Please type the following sentence: </h2>
            <h4>I confirm I will be unlocking all lockers</h4>
          <input
            className="org-input"
            placeholder={sentence}
            type="email"
            id="email"
          ></input>
          <br />
          <button className="org-global-button button-blue" onClick={redirectSuccess}>Open Lockers</button>
        </div>
      </div>
    </div>
  );
};

export default OrgSentence;
