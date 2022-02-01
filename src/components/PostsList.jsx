import React from 'react';
import Box from '@mui/material/Box';
import CardPost from './CardPost';


export const PostsList = ({items, deleteItem}) => {
    return (
        <Box mt={1}>
            {items.map((post) => 
                <CardPost 
                    key={post.id}
                    post={post}
                    onDelete={deleteItem}
                />)}
        </Box>
    )
};
