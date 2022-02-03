import React from 'react';
import PostService from '../API/PostService';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//импорт компонент
import { Header } from '../components/common/Header';
import { ListPosts } from '../components/server/ListPosts';
import { AddForm } from '../components/server/AddForm';
import { PostFilter } from '../components/server/PostFilter';
import MyModal from '../components/common/MyModal';
import { useFilter } from '../hooks/useFilter';


const styles = {
    box: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    mainItem: {
        flex: '1 1 auto'
    }
}

export default function ServerPosts() {
    
    //состояниe для управления модальным окном
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    //состояниe постов
    const [posts, setPosts] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);
    //состояниe для фильтра
    const [filter, setFilter] = React.useState({sort:'',search:''});

    //функция добавления постов
    const addPost = (post) => {
        setPosts([post, ...posts]) //новый пост добавляется вперед
    };
    //функция удаления постов
    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    };

    //хук для сортировки и поиска в массиве постов
    const filteredPosts = useFilter(posts, filter)
    
    //функция для получения постов от сервера
    async function fetchPosts() {
        setIsFetching(true);
        const serverPosts = await PostService.getAll();
        setPosts(serverPosts);
        setIsFetching(false);
    }
    React.useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <Box sx={styles.box}>
            <MyModal {...{ open, setOpen }}>
                <AddForm {...{ addPost }} />
            </MyModal>
            <Header title='Posts' />
            <Paper variant="outlined" sx={{ p: 1 }}>
                <Button fullWidth onClick={handleOpen}>Create post</Button>
            </Paper>
            <PostFilter {...{ filter, setFilter }} />
            
            {isFetching 
            ?<Typography
                sx={{ textAlign: 'center', mt: 3 }}
                variant="h3"
                component="h2">
                Loading...
            </Typography>
            :<ListPosts
                sx={styles.mainItem}
                items={filteredPosts}
                deleteItem={deletePost}/>
            }
        </Box>
    )
};
