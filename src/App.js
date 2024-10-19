import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { lightTheme, darkTheme } from './utils/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './pages/SignInPage/SignInPage';
import Home from './pages/Home/Home';
import FormFields from './pages/FormPage/FormFields';
import Admin from './pages/Admin/Admin';

function App() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/validation",
      element: <FormFields/>
    },
    {
      path: '/auth/sign-in',
      element: <LoginForm/>
    },
      {
          path: '/auth/admin',
          element: <Admin/>
      }
  ]);

  return (
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />

        <RouterProvider router={router} />
        <IconButton
            onClick={handleThemeChange}
            sx={{
              position: 'absolute',
              top: 20,
              right: 66,
              color: theme === 'light' ? '#000000' : '#FFFFFF',
              border: '2px solid #0A2640',
            }}
        >
          <Brightness2Icon />
        </IconButton>
      </ThemeProvider>
  );
}

export default App;
