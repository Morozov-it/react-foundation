import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
    box: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
}

export default function NotFound({error}) {
    return (
        <Box sx={styles.box}>
            <Typography variant="h3" component="h1">
                Error Page
            </Typography>
        </Box>
    )
};
