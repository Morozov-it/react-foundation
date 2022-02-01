import React from 'react';
import Box from '@mui/material/Box';
//импорт компонент
import { Header } from '../components/Header';
import { PostsList } from '../components/PostsList';
import { AddPostForm } from '../components/AddPostForm';

const styles = {
    box: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    mainItem: {
        flex: '1 1 auto'
    }
}

export default function Posts () {
    return (
        <Box sx={styles.box}>
            <Header />
            <AddPostForm />
            <PostsList sx={styles.mainItem}/>
        </Box>
    )
};
