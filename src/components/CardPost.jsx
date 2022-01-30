import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPost({post, onDelete}) {
    return (
        <Box mb={1}>
            <Card variant="outlined">
                <CardContent>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2">
                    {post.body}
                </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={()=>onDelete(post.id)} size="small">delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}