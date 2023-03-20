import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { StartLoginPage, CreateAccountPage, CreateAccountWithEmailPage, SitesPage, HelpPage, UsagePage } from './pages';
import ActivityPage from './pages/Activity';
import ConfigureProjectPage from './pages/ConfigureProjectPage';

import LogInPage from './pages/LogInPage';
import SettingsPage from './pages/SettingsPage';
import { Context } from './types/types';

const initialUserName = 'UserName';
const initialName = 'Name';
const initialEmail = 'Email';

export const AppContext = React.createContext<Context>({
  initialUserName: 'UserName',
  initialName: 'Name',
  initialEmail: 'Email',
  projectName: 'ProjectName',
  projectDomen: 'ProjectDomen',
  lastCommit: 'LastCommit',
  fromBranch: 'Branch',
  userName: initialUserName,
  name: initialName,
  email: initialEmail,

  setUserName: () => {},
  setName: () => {},
  setEmail: () => {},
  setProjectName: () => {},
  setProjectDomen: () => {},
  setLastCommit: () => {},
  setFromBranch: () => {},
});

const App = () => {
  const [userName, setUserName] = useState(initialUserName);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const [projectName, setProjectName] = useState('ProjectName');
  const [projectDomen, setProjectDomen] = useState('ProjectDomen');
  const [lastCommit, setLastCommit] = useState('LastCommit');
  const [fromBranch, setFromBranch] = useState('Branch');
  return (
    <AppContext.Provider
      value={{
        projectName,
        projectDomen,
        lastCommit,
        fromBranch,
        setFromBranch,
        setLastCommit,
        setProjectDomen,
        setProjectName,
        initialEmail,
        initialName,
        initialUserName,
        userName,
        name,
        email,
        setUserName,
        setName,
        setEmail,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartLoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/create-account-with-email" element={<CreateAccountWithEmailPage />} />
          <Route path="/login-with-email" element={<LogInPage />} />
          <Route element={<Layout />}>
            <Route path="overview" element={<SitesPage />} />
            <Route path="configure-project" element={<ConfigureProjectPage />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="usage" element={<UsagePage />} />
            <Route path="/settings/:application" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
