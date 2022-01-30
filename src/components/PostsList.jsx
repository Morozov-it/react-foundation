import React from 'react';
import Box from '@mui/material/Box';
import CardPost from './CardPost';

const data = [
    {
        id: 1,
        title: 'JavaScript',
        body: 'JavaScript is the most usefull language'
    },
    {
        id: 2,
        title: 'Java',
        body: 'Java is the most complex language'
    },
    {
        id: 3,
        title: 'Pyton',
        body: 'Pyton is the most hipe language'
    },
]

export const PostsList = () => {
    const [posts, setPosts] = React.useState(data);

    const onDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    };

    return (
        <Box mt={1}>
            {posts.map((post) => 
                <CardPost 
                    key={post.id}
                    post={post}
                    onDelete={onDelete}
                />)}
        </Box>
    )
};
