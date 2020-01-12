import React from "react";
import "./orgUnlock.scss";
import OrgTopbar from "../topbar/orgTopbar";

import logo from "../../../assets/logo.png";

import { useHistory } from "react-router";

const OrgReLogin: React.FC = () => {
  let history = useHistory();
  const test = 2;
  const example = "example@hr.nl";

  function redirectUnlocklockers(e: any) {
    history.push("/unlocklockers");
  }
  return (
    <div className="main-div-org-no-nav">
      
      <div className="center-flex-container">
      <img className="logo" src={logo} alt="" />
        <div className="content-container">
            <h2>Please Re-enter your credentials</h2>
          <input
            className="org-input"
            placeholder={example}
            type="email"
            id="email"
          ></input>
          <input
            className="org-input"
            placeholder="password"
            type="password"
            id="passcode"
          ></input>
          <br />
          <button className="org-global-button button-blue">Login</button>
        </div>
      </div>
    </div>
  );
};

export default OrgReLogin;
