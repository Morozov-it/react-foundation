import React from 'react';
import Box from '@mui/material/Box';
import CardPost from './CardPost';
import { DataContext } from '../DataContext';


export const PostsList = () => {
    const { posts }= React.useContext(DataContext);

    const [myPosts, setMyPosts] = React.useState(posts)

    const onDelete = (id) => {
        setMyPosts(myPosts.filter((post) => post.id !== id))
    };

    return (
        <Box mt={1}>
            {myPosts.map((post) => 
                <CardPost 
                    key={post.id}
                    post={post}
                    onDelete={onDelete}
                />)}
        </Box>
    )
};
