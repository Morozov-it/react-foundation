import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography}  from '@mui/material';

export default function CardPost({post, onDelete}) {
    return (
        <Box mb={1}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography color="secondary">
                        {post.language}
                    </Typography>
                    <Typography variant="body2">
                        {post.description}
                    </Typography>
                    <Typography color="secondary">
                        {post.gender}
                    </Typography>
                    <Typography variant='overline'>
                        {post.postDate}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={()=>onDelete(post.id)} size="small">delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}