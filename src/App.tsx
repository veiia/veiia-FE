import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {
  StartLoginPage,
  CreateAccountPage,
  CreateAccountWithEmailPage,
  SitesPage,
  BuildsPage,
  HelpPage,
  MembersPage,
  ProfileSettingsPage,
  GroupSettingsPage,
} from './pages';
import LogInPage from './pages/LogInPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartLoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/create-account-with-email" element={<CreateAccountWithEmailPage />} />
        <Route path="/login-with-email" element={<LogInPage />} />
        <Route element={<Layout />}>
          <Route path="sites" element={<SitesPage />} />
          <Route path="builds" element={<BuildsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="settings" element={<ProfileSettingsPage />} />
          <Route path="group-settings" element={<GroupSettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
