import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.scss';
import './global/i18n/i18n'
import OrgLogin from './components/organisation/login/orgLogin';
import UserUnlock from './components/users/unlock/userUnlock';
import OrgDashboard from './components/organisation/dashboard/orgDashboard';
import SingleLocker from './components/organisation/singlelocker/orgSingleLocker';
import OrgLockers from './components/organisation/lockers/orgLockers';
import PageNotFound from './components/general/pageNotFound';
import TestPage from './components/general/testPage';
import UserForgotPass from './components/users/forgotPass/userForgotPass';
import UserChangePass from './components/users/changePass/userChangePass';
import UserEndOwnership from './components/users/endOwnership/userEndOwnership';
import UserForgotPassSent from './components/users/forgotPassSent/userForgotPassSent';
import UserInfo from './components/users/info/userInfo';
import UserGoodbye from './components/users/goodbye/userGoodbye';
import UserLockdown from './components/users/lockdown/userLockdown';
import UserPassChanged from './components/users/passChanged/userPassChanged';
import OrgLockerTables from './components/organisation/tables/orgLockerTables';
import OrgDashboardTable from './components/organisation/tables/orgDashboardTable';
import OrgLogTables from './components/organisation/tables/orgLogTables';
import OrgReLogin from './components/organisation/unlock/orgReLogin';
import OrgSentence from './components/organisation/unlock/orgSentence';
import OrgSuccess from './components/organisation/unlock/orgSuccess';
import UserClaimLocker from './components/users/registration/claimLocker/userClaimLocker';
import UserMailSent from './components/users/registration/mailSent/userMailSent';
import UserSetPasscode from './components/users/registration/setPasscode/userSetPasscode';
import UserRegComplete from './components/users/registration/complete/userRegComplete';
import UserLockerUnavailable from './components/users/unavailable/userLockerUnavailable';
import UserTutorial from './components/users/tutorial/userTutorial';
import ProtectedRoute, { ProtectedRouteProps } from './models/protectedRoute';
import store from 'store2';
import UserLanding from './components/users/landing/userLanding';
import UserResetPasscode from './components/users/resetPasscode/userResetPasscode';

const unlockProtectedRouteProps: ProtectedRouteProps = {
  authenticationPath: "/l/",
  isAllowed: false
}

window.addEventListener("beforeunload", (ev) =>{
    store.set("devDebugToken",false, true);
});

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path="/l/*" component={UserLanding} />
          <Route exact path="/claim" component={UserClaimLocker} />
          <Route exact path="/claim/mailsent" component={UserMailSent} />
          <Route exact path="/claim/passcode" component={UserSetPasscode} />
          <Route exact path="/claim/complete" component={UserRegComplete} />
          <Route exact path="/unavailable" component={UserLockerUnavailable} />
          <Route exact path="/tutorial" component={UserTutorial} />
          <Route exact path="/unlock" component={UserUnlock} />
          <Route exact path="/lockdown" component={UserLockdown} />
          <Route exact path="/forgotPass" component={UserForgotPass} />
          <Route exact path="/forgotPassSent" component={UserForgotPassSent} />
          <Route exact path="/forgot/passcode" component={UserResetPasscode} />
          <ProtectedRoute { ...unlockProtectedRouteProps } exact={true} path="/info" component={UserInfo} />
          <ProtectedRoute { ...unlockProtectedRouteProps } exact={true} path="/changePass" component={UserChangePass} />
          <ProtectedRoute { ...unlockProtectedRouteProps } exact={true} path="/passChanged" component={UserPassChanged} />
          <ProtectedRoute { ...unlockProtectedRouteProps } exact={true} path="/endOwnership" component={UserEndOwnership} />
          <ProtectedRoute { ...unlockProtectedRouteProps } exact={true} path="/goodbye" component={UserGoodbye} />
          <Route exact path="/login" component={OrgLogin} />
          <Route exact path="/dashboard" component={OrgDashboard} />
          <Route exact path="/singlelocker" component={SingleLocker} />
          <Route exact path="/lockers" component={OrgLockers} />
          <Route exact path="/orglockertables" component={OrgLockerTables} />
          <Route exact path="/dashboardtables" component={OrgDashboardTable} />
          <Route exact path="/orglogtables" component={OrgLogTables} />
          <Route exact path="/relogin" component={OrgReLogin} />
          <Route exact path="/unlocklockers" component={OrgSentence} />
          <Route exact path="/success" component={OrgSuccess} />
          <Route exact path="/" component={TestPage} />
          <Route path="/404" component={PageNotFound} />
          <Route path="/*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
