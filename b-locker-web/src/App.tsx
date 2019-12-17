import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import OrgLogin from './components/organisation/login/orgLogin';
import UserUnlock from './components/users/unlock/userUnlock';
import OrgDashboard from './components/organisation/dashboard/orgDashboard';
import PageNotFound from './components/general/pageNotFound';
import TestPage from './components/general/testPage';

const App: React.FC = () => {
  return (
    <div className="App">
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
          <Route exact path="/">
            <TestPage />
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
