import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../ModeContext';
//импорт готовых компонент
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export const ToggleModeBox = () => {
    //получение объекта theme
    const theme = useTheme();
    //получение объекта с методом toggle из контекста
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box
        sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end'
        }}
        >
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    </Box>
    )
};
