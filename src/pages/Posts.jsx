import React from 'react';
import { DataContext } from '../DataContext';
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

export default function Posts() {
    const { posts, deletePost, addPost, genderItems, options } = React.useContext(DataContext);
    
    return (
        <Box sx={styles.box}>
            <Header title='Posts'/>
            <AddPostForm {...{ addPost, genderItems, options }}/>
            <PostsList sx={styles.mainItem}
                items={posts}
                deleteItem={deletePost}/>
        </Box>
    )
};
