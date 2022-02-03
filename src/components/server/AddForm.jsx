import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
//импорт готовых компонент
import Input from '../../controls/Input';
import Button from '../../controls/Button';


const initialState = {
    id: Date.now(),
    title: '',
    body: ''
}

export const AddForm = ({ addPost }) => {
    //активация состояния полей формы с начальным состоянием
    const [values, setValues] = React.useState(initialState);

    //функция для сброса всех полей
    const handleFormReset = () => {
        setValues(initialState)
    }

    //функция для контролируемых полей
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    //функция отправки объекта нового поста в массив постов
    const onSubmit = (event) => {
        let id = Date.now()
        event.preventDefault()
        addPost({ ...values, id })
        handleFormReset()
        //console.log('post is added', newPost);
    };

    return (
        <Paper variant="outlined" sx={{ p: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Add a new post
            </Typography>
            <Box component="form"
            autoComplete="off"
            onReset={handleFormReset}
            onSubmit={onSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4} >
                        <Input
                            label="Title"
                            name='title'
                            value={values.title}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Input
                            label="Description"
                            name='body'
                            value={values.body}
                            onChange={handleInputChange}
                        />    
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Stack sx={{justifyContent:'flex-end'}} direction="row" spacing={1}>
                            <Button
                                type='reset'
                                text='clear form'
                                startIcon={<DeleteIcon />}/>
                            <Button
                                type='submit'
                                text='add post'
                                endIcon={<SendIcon />}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};
