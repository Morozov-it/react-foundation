import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
//импорт компонент
import PostItem from './PostItem';


export const ListPosts = ({ items, deleteItem }) => {

    if (!items.length) return (
        <Typography
            sx={{ textAlign: 'center', mt: 3 }}
            variant="h3"
            component="h2">
            Posts not founded!
        </Typography>
    )

    return (
        <Box mt={1}>
            <TransitionGroup>
                {items.map((item) => (
                    <Collapse key={item.id}>
                            <PostItem 
                                key={item.id}
                                item={item}
                                onDelete={deleteItem} />
                    </Collapse>
                ))}
            </TransitionGroup>
        </Box>
    )
};
