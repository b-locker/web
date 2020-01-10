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
import UserClaimLocker from './components/users/registration/claimLocker/userClaimLocker';
import UserMailSent from './components/users/registration/mailSent/userMailSent';
import UserSetPasscode from './components/users/registration/setPasscode/userSetPasscode';
import UserRegComplete from './components/users/registration/complete/userRegComplete';
import UserLockerUnavailable from './components/users/unavailable/userLockerUnavailable';
import UserTutorial from './components/users/tutorial/userTutorial';

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path="/">
            <TestPage />
          </Route>
          <Route exact path="/claim">
            <UserClaimLocker />
          </Route>
          <Route exact path="/claim/mailsent">
            <UserMailSent />
          </Route>
          <Route exact path="/claim/passcode">
            <UserSetPasscode />
          </Route>
          <Route exact path="/claim/complete">
            <UserRegComplete />
          </Route>
          <Route exact path="/unavailable">
            <UserLockerUnavailable />
          </Route>
          <Route exact path="/tutorial">
            <UserTutorial />
          </Route>
          <Route exact path="/unlock">
            <UserUnlock />
          </Route>
          <Route exact path="/lockdown">
            <UserLockdown />
          </Route>
          <Route exact path="/info">
            <UserInfo />
          </Route>
          <Route exact path="/forgotPass">
            <UserForgotPass />
          </Route>
          <Route exact path="/forgotPassSent">
            <UserForgotPassSent />
          </Route>
          <Route exact path="/changePass">
            <UserChangePass />
          </Route>
          <Route exact path="/passChanged">
            <UserPassChanged />
          </Route>
          <Route exact path="/endOwnership">
            <UserEndOwnership />
          </Route>
          <Route exact path="/goodbye">
            <UserGoodbye />
          </Route>
          <Route path="/login">
            <OrgLogin />
          </Route>
          <Route exact path="/dashboard">
            <OrgDashboard />
          </Route>
          <Route path="/singlelocker">
            <SingleLocker />
          </Route>
          <Route path="/lockers">
            <OrgLockers />
          </Route>
          <Route exact path="/">
            <TestPage />
          </Route>
          <Route path="/404">
            <PageNotFound />
          </Route>
          <Route path="/*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
