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
          <Route exact path="/claim" component={UserClaimLocker} />
          <Route exact path="/claim/mailsent" component={UserMailSent} />
          <Route exact path="/claim/passcode" component={UserSetPasscode} />
          <Route exact path="/claim/complete" component={UserRegComplete} />
          <Route exact path="/unavailable" component={UserLockerUnavailable} />
          <Route exact path="/tutorial" component={UserTutorial} />
          <Route exact path="/unlock" component={UserUnlock} />
          <Route exact path="/lockdown" component={UserLockdown} />
          <Route exact path="/info" component={UserInfo} />
          <Route exact path="/forgotPass" component={UserForgotPass} />
          <Route exact path="/forgotPassSent" component={UserForgotPassSent} />
          <Route exact path="/changePass" component={UserChangePass} />
          <Route exact path="/passChanged" component={UserPassChanged} />
          <Route exact path="/endOwnership" component={UserEndOwnership} />
          <Route exact path="/goodbye" component={UserGoodbye} />
          <Route path="/login" component={OrgLogin} />
          <Route exact path="/dashboard" component={OrgDashboard} />
          <Route path="/singlelocker" component={SingleLocker} />
          <Route path="/lockers" component={OrgLockers} />
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
