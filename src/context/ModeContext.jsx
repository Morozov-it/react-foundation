import React from 'react';
import { customTheme } from '../customTheme';
import { ThemeProvider, createTheme, responsiveFontSizes  } from '@mui/material/styles';

//создание контекста для управления функцией изменения темы
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


export function ModeContext({children}) {
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
    let theme = React.useMemo(() => createTheme(customTheme(mode)), [mode]);

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
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}