import React from 'react';
import { PostService, getTotalPages } from '../API/PostService';
import { useFilter } from '../hooks/useFilter';
import { useFetching } from '../hooks/useFetching';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
//импорт компонент
import { Spinner } from '../components/common/Spinner';
import MyModal from '../components/common/MyModal';
import { ListPosts } from '../components/server/ListPosts';
import { AddForm } from '../components/server/AddForm';
import { PostFilter } from '../components/server/PostFilter';
import { useObserver } from '../hooks/useObserver';


const styles = {
    box: {
        display: 'flex',
        flexDirection: 'column'
    },
    mainItem: {
        flex: '1 1 auto'
    },
}


export default function ServerPosts() {
    
    //состояниe для управления модальным окном
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    //состояниe постов
    const [posts, setPosts] = React.useState([]);
    //состояниe для фильтра
    const [filter, setFilter] = React.useState({ sort: '', search: ''});

    //состояние для пагинации
    const [totalPages, setTotalPages] = React.useState(0);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);

    //состояние загрузки и ошибки
    const [fetching, isFetching, error] = useFetching( async () => {
        const response = await PostService.getAll(limit, page);
        const totalCount = response.headers['x-total-count'];
        setPosts([...posts, ...response.data]);
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

    //получение элементов страницы для работы скролла постов
    const lastElement = React.useRef();
    //вызов хука для скролла постов
    useObserver(lastElement, page < totalPages, isFetching, () => {
        setPage(page + 1)
    })
    
    React.useEffect(() => {
        fetching();
        return () => {
            setPosts([])
        }
    }, [page])

    return (
        <Box sx={styles.box}>
            <MyModal {...{ open, setOpen }}>
                <AddForm {...{ addPost }} />
            </MyModal>
            <Paper variant="outlined" sx={{ p: 1 }}>
                <Button fullWidth onClick={handleOpen}>Create post</Button>
            </Paper>
            <PostFilter {...{ filter, setFilter }} />

            {error && <Alert severity="error">{error}</Alert>}
            <ListPosts
                sx={styles.mainItem}
                items={filteredPosts}
                deleteItem={deletePost} />
            <div style={{height: 10}} ref={lastElement} />
            {isFetching && <Spinner />}
        </Box>
    )
};
