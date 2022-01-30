import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPost({title, body}) {
    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {body}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}