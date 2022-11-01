import StartLoginPage from "./Pages/StartLoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateAccountWithEmailPage from "./Pages/CreateAccountWithEmailPage";
import LogInWithEmailPage from "./Pages/LogInWithEmailPage";

const router = createBrowserRouter([
  { path: '/', element: <StartLoginPage /> },
  {
    path: '/create-account', element: <CreateAccountPage />
  },
  {
    path: '/create-account-with-email', element: <CreateAccountWithEmailPage />
  },
  {
    path: '/login-with-email', element: <LogInWithEmailPage />
  }])

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
