import React from 'react';
import Box from '@mui/material/Box';
import CardPost from './CardPost';
import { DataContext } from '../DataContext';


export const PostsList = () => {
    const { posts, deletePost }= React.useContext(DataContext);

    return (
        <Box mt={1}>
            {posts.map((post) => 
                <CardPost 
                    key={post.id}
                    post={post}
                    onDelete={deletePost}
                />)}
        </Box>
    )
};
