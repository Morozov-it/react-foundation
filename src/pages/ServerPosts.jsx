import React from 'react';
import { PostService, getTotalPages } from '../API/PostService';
import { useFilter } from '../hooks/useFilter';
import { useFetching } from '../hooks/useFetching';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
//импорт компонент
import { Header } from '../components/common/Header';
import { ListPosts } from '../components/server/ListPosts';
import { AddForm } from '../components/server/AddForm';
import { PostFilter } from '../components/server/PostFilter';
import MyModal from '../components/common/MyModal';

const styles = {
    box: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    mainItem: {
        flex: '1 1 auto'
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
    },
    paginator: {
        marginTop: 2,
        marginBottom: 2,
        '& .MuiPagination-ul': {
            justifyContent: 'center'
        }
    }
}

export default function ServerPosts() {
    
    //состояниe для управления модальным окном
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    //состояниe постов
    const [posts, setPosts] = React.useState([]);
    //состояниe для фильтра
    const [filter, setFilter] = React.useState({ sort: '', search: '' });
    //состояние для пагинации
    const [totalPages, setTotalPages] = React.useState(0);
    const [limit, setLimit] = React.useState(5);
    const [page, setPage] = React.useState(1);

    //состояние загрузки и ошибки
    const [fetching, isFetching, error] = useFetching( async () => {
        const response = await PostService.getAll(limit, page);
        const totalCount = response.headers['x-total-count'];
        setPosts(response.data);
        setTotalPages(getTotalPages(totalCount, limit))
    })

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
    
    React.useEffect(() => {
        fetching();
    }, [page])

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
            ?<Box sx={styles.spinner}>
                <CircularProgress size={80} />
            </Box>
            :<ListPosts
                sx={styles.mainItem}
                items={filteredPosts}
                deleteItem={deletePost}/>
            }
            
            {error && <Alert severity="error">{error}</Alert>}
            
            <Pagination
                sx={styles.paginator}
                onChange={(event,page) => setPage(page)}
                page={page}
                count={totalPages}
                variant="outlined"
                color="primary" />
        </Box>
    )
};
