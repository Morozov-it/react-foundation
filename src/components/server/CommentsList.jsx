import React from 'react';
//импорт стилевых компонент
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function CommentsList ({ items }) {
    
    if (!items.length) return (
        <Typography
            sx={{ textAlign: 'center', mt: 3 }}
            variant="h3">
            Comments not founded!
        </Typography>
    )

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Typography variant='h6'>
                Testimonials
            </Typography>
            {items.map((item) => (<React.Fragment key={item.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="avatar" src="/" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<strong>{item.name}</strong>}
                        secondary={
                            <>
                                <Typography
                                    variant="string"
                                    color="text.primary">
                                    {item.body}
                                </Typography>
                                <Typography>
                                    {item.email}
                                </Typography>
                            </>
                        }/>
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>))}
        </List>
    );
}