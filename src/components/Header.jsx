import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//импорт компонент
import { ToggleModeBox } from './ToggleModeBox';

const styles = {
    box: {
        textAlign: 'center'
    }
}

export function Header() {
    return (
        <Box sx={styles.box}>
            <Typography variant="h3" component="h1">
                Posts
                <ToggleModeBox />
            </Typography>
        </Box>
    )
};