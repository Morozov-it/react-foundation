import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography}  from '@mui/material';

export default function PostItem({ item, onDelete }) {
    return (
        <Box mb={1}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.body}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={()=>onDelete(item.id)} size="small">delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}