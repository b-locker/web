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
import PageNotFound from './components/general/pageNotFound';
import TestPage from './components/general/testPage';
import UserForgotPass from './components/users/forgotPass/userForgotPass';
import UserChangePass from './components/users/changePass/userChangePass';
import UserEndOwnership from './components/users/endOwnership/userEndOwnership';
import UserForgotPassSent from './components/users/forgotPassSent/userForgotPassSent';
import UserInfo from './components/users/info/userInfo';
import UserGoodbye from './components/users/goodbye/userGoodbye';
import UserLockdown from './components/users/lockdown/userLockdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router>
          <Switch>
            <Route exact path="/">
              <TestPage />
            </Route>
            <Route path="/login">
              <OrgLogin />
            </Route>
            <Route path="/unlock">
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
            <Route exact path="/endOwnership">
              <UserEndOwnership />
            </Route>
            <Route exact path="/goodbye">
              <UserGoodbye/>
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
    </div>
  );
}

export default App;
