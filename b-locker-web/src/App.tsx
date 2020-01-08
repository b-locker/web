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

const App: React.FC = () => {
  return (
    //App gecomment omdat de css hiervan conflicten geeft met de styling van het dashboard
    //<div className="App">
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/login">
            <OrgLogin />
          </Route>
          <Route path="/unlock">
            <UserUnlock />
          </Route>
          <Route path="/dashboard">
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

    //</div>
  );
}

export default App;
