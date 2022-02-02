import React from 'react';
import { DataContext } from '../DataContext';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
//импорт компонент
import { Header } from '../components/Header';
import { PostsList } from '../components/PostsList';
import { AddPostForm } from '../components/AddPostForm';
import { FilterPost } from '../components/FilterPost';
import MyModal from '../components/MyModal';

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
    //получение данных из контекста
    const { posts,
        deletePost,
        addPost,
        sortPosts,
        searchPosts,
        genderItems,
        langOptions,
        sortOptions } = React.useContext(DataContext);
    
    //создание состояния для управления модальным окном
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Box sx={styles.box}>
            <MyModal {...{ open, handleClose }}>
                <AddPostForm {...{ addPost, genderItems, langOptions }} />
            </MyModal>
            <Header title='Posts' />

            <Paper variant="outlined" sx={{ p: 1 }}>
                <Button fullWidth onClick={handleOpen}>Create post</Button>
            </Paper>
            
            <FilterPost {...{ sortOptions, sortPosts, searchPosts }} />
            <PostsList
                sx={styles.mainItem}
                items={posts}
                deleteItem={deletePost}/>
        </Box>
    )
};
