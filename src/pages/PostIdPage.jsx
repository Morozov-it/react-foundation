import React from 'react';
import { useParams } from "react-router-dom";
import { PostService } from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
//импорт компонент
import { Spinner } from '../components/common/Spinner';


const styles = {
    box: {
        display: 'flex',
        flexDirection: 'column'
    },
}

const initialPost = { id: 0, title: '', body: '' };

export default function PostIdPage() {
    let { id } = useParams();
    const [post, setPost] = React.useState(initialPost);

    const [fetching, isFetching, error] = useFetching(async () => {
        const response = await PostService.getPostId(id)
        setPost(response.data)
    });
    React.useEffect(() => {
        fetching()
        //очистка при unmount
        return () => {setPost(initialPost)}
    }, [id]);

    return (
        <Box sx={styles.box} >
            {isFetching
                ? <Spinner />
                : <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {post.id}. {post.title}
                        </Typography>
                        <Typography variant="body2">
                            {post.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => { }} size="small">edit</Button>
                    </CardActions>
                </Card>
            }
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    );
}