import React from 'react';
import { useNavigate } from "react-router-dom";
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//импорт компонент
import { Header } from '../components/common/Header';


const styles = {
    box: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
}

export default function Main() {
    let navigate = useNavigate();
    return (
        <Box sx={styles.box}>
            <Header title='Main' />
            {/* <Paper variant="outlined" sx={{ p: 1 }}> */}
            <Stack mt={2} spacing={2}>
                <Button
                    variant='outlined'
                    fullWidth
                    onClick={() => navigate(`/context-posts`)}
                >Context posts</Button>
                <Button
                    variant='outlined'
                    fullWidth
                    onClick={() => navigate(`/server-posts`)}
                >Server posts</Button>
            </Stack>
            {/* </Paper> */}
        </Box>
    )
};
