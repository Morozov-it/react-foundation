import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
    },
}

export function Spinner() {
    return (
        <Box sx={styles.spinner}>
            <CircularProgress size={80} />
        </Box>
    )
};