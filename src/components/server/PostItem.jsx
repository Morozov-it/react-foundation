import React from 'react';
import { useNavigate } from "react-router-dom";
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostItem({ item, onDelete }) {
    let navigate = useNavigate();
    return (
        <Box mb={1}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="div">
                        {item.id}. {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => navigate(`/server/${item.id}`)} size="small">open</Button>
                    <Button onClick={()=>onDelete(item.id)} size="small">delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}