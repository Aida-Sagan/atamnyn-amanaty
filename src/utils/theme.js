import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f4f6f8',
        },
        text: {
            primary: '#000000',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0A2640',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});
