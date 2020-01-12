import React from "react";
import "./orgUnlock.scss";
import OrgTopbar from "../topbar/orgTopbar";

import { useHistory } from "react-router";

const OrgSentence: React.FC = () => {
  let history = useHistory();

  function redirectUnlocklockers(e: any) {
    history.push("/unlocklockers");
  }

  return <div className="main-div-org">{/* todo */}</div>;
};

export default OrgSentence;
