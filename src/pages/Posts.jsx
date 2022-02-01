import React from 'react';
import { DataContext } from '../DataContext';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//импорт компонент
import { Header } from '../components/Header';
import { PostsList } from '../components/PostsList';
import { AddPostForm } from '../components/AddPostForm';
import { SortingPost } from '../components/SortingPost';

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
    const { posts,
        deletePost,
        addPost,
        sortPosts,
        genderItems,
        langOptions,
        sortOptions } = React.useContext(DataContext);
    
    return (
        <Box sx={styles.box}>
            <Header title='Posts'/>
            <AddPostForm {...{ addPost, genderItems, langOptions }} />
            <SortingPost {...{ sortOptions, sortPosts }}/>
            {posts.length ?
                <PostsList sx={styles.mainItem}
                    items={posts}
                    deleteItem={deletePost}
                />
                :
                <Typography sx={{ textAlign:'center', mt:3 }}
                    variant="h3"
                    component="h2">
                    Posts not founded!
                </Typography>
            }
        </Box>
    )
};
