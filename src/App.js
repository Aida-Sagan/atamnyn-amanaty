import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, FormFields, CheckForm, SuccessPage, Admin } from '../src/pages';
import SignIn  from '../src/pages/sign-in/SignIn';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/form",
      element: <FormFields/>
    },
    {
      path: "/check-form",
      element: <CheckForm/>
    },
    {
      path: '/success-page',
      element: <SuccessPage/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/admin',
      element: <Admin/>
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
