import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../context/ModeContext';
//импорт готовых компонент
import { Box, IconButton }  from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export const ToggleModeBox = () => {
    //получение объекта theme
    const theme = useTheme();
    //получение объекта с методом toggle из контекста
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box sx={{ display: 'inline-block', ml:1 }}>
            <IconButton sx={{ padding: 0 }}
                onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
};
