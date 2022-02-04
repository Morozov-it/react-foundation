import React from 'react';
import { useParams } from "react-router-dom";
import { PostService } from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import CommentsList from '../components/server/CommentsList'
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

export default function PostIdPage() {
    //получение Id из URL адреса
    let params = useParams();

    //состояние для постов и комментариев
    const [post, setPost] = React.useState({});
    const [comments, setComments] = React.useState([]);

    //функция через хук для получения постов с индикацией и ошибками
    const [fetchPostById, isFetching, error] = useFetching(
        async (id) => {
            const response = await PostService.getById(id)
            setPost(response.data)
        }
    );
    //функция через хук для получения комментариев с индикацией и ошибками
    const [fetchCommentsById, isComFetching, comError] = useFetching(
        async (id) => {
            const response = await PostService.getCommentsById(id)
            setComments(response.data)
        }
    );


    React.useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.id);
        //очистка при unmount
        return () => {
            setPost({});
            setComments([]);
        }
    }, []);

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
            <CommentsList items={comments}/>
            {comError && <Alert severity="error">{comError}</Alert>}
        </Box>
    );
}