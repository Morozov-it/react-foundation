import React from 'react';
import { App } from './App';
import { ThemeProvider, createTheme, responsiveFontSizes  } from '@mui/material/styles';
//import { grey } from '@mui/material/colors';

//создание контекста для управления функцией изменения темы
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const getDesignTokens = (mode) => ({
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

export function ModeContext() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        }),
    [],
    );

    // Update the theme only if the mode changes
    let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    //отзывчивый размер шрифтов
    theme = responsiveFontSizes(theme);

    //стандартный набор для темы
    // const theme = React.useMemo(
    //     () =>
    //     createTheme({
    //         palette: {
    //         mode,
    //         },
    //     }),
    //     [mode],
    // );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}