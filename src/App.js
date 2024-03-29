import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, FormFields } from '../src/pages';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    // {
    //   path: "/signin",
    //   element: <SignIn/>
    // },
    {
      path: "/form",
      element: <FormFields/>
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
