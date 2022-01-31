//import { grey } from '@mui/material/colors';

export const customTheme = (mode) => ({
    palette: {
    mode,
    ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: '#1976d2',
                light: '#42a5f5',
                dark: '#1565c0',
                contrastText: '#fff'
            },
            divider: 'rgba(0,0,0,0.12)',
            text: {
                primary: 'rgba(0,0,0,0.87)',
                secondary: 'rgba(0,0,0,0.6)',
                disabled: 'rgba(0,0,0,0.38)'
            },
            background: {
                paper: '#fff',
                default: '#fff',
            },
        }
        : {
            // palette values for dark mode
            primary: {
                main: '#90caf9',
                light: '#e3f2fd',
                dark: '#42a5f5',
                contrastText: 'rgba(0,0,0,0.87)'
            },
            divider: 'rgba(255,255,255,0.12)',
            text: {
                primary: '#fff',
                secondary: 'rgba(255,255,255,0.7)',
                disabled: 'rgba(255,255,255,0.5)',
                icon: 'rgba(255,255,255,0.5)'
            },
            background: {
                paper: '#121212',
                default: '#121212',
            },
        }),
    },
});