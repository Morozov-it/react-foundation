import React from 'react';
import { App } from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//создание контекста для управления функцией изменения темы
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}