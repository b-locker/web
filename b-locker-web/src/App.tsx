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

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router>
          <Switch>
            <Route path="/login">
              <OrgLogin />
            </Route>
            <Route path="/unlock">
              <UserUnlock />
            </Route>
            <Route exact path="/">
              <TestPage />
            </Route>
            <Route exact path="/info">
              
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
