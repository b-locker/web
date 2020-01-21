import React from "react";
import "./orgUnlock.scss";

import logo from "../../../assets/logo.png";

import { useHistory } from "react-router";

const OrgSuccess: React.FC = () => {
  let history = useHistory();

  function redirectLockers(e: any) {
    history.push("/lockers");
  }
return (
  <div className="main-div-org-no-nav">
    
    <div className="center-flex-container">
    <img className="logo" src={logo} alt="" />
      <div className="content-container">
          <h2>All lockers have been unlocked</h2>
        <br />
        <button className="org-global-button button-blue" onClick={redirectLockers}>Return</button>
      </div>
    </div>
  </div>
);
};

export default OrgSuccess;
