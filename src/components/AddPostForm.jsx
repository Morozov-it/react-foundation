import React from 'react';
import { useForm, Form } from '../hooks/useForm'
//импорт стилевых компонент
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
//импорт готовых компонент
import Input from '../controls/Input';
import RadioGroup from '../controls/RadioGroup';
import Select from '../controls/Select';
import CheckBox from '../controls/CheckBox';
import DatePicker from '../controls/DatePicker';
import Button from '../controls/Button';


const initialState = {
    title: '',
    description: '',
    gender: '',
    language: '',
    isCompleted: false,
    postDate: new Date(),
}

export const AddPostForm = ({ addPost, genderItems, langOptions }) => {
    
    const { values, handleInputChange, handleFormReset } = useForm(initialState);
    
    //функция отправки объекта нового поста в массив постов в DataContext
    const onSubmit = (event) => {
        event.preventDefault();
        let date = values.postDate.toDateString();
        const newPost = { ...values, id:Date.now(), postDate:date };
        addPost(newPost)
        handleFormReset()
        //console.log('post is added', newPost);
    };

    return (
        <Paper variant="outlined" sx={{ p: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Add a new post
            </Typography>
            <Form onReset={handleFormReset} onSubmit={onSubmit}>
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
                            name='description'
                            value={values.description}
                            onChange={handleInputChange}
                        />    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <RadioGroup
                            label='Gender'
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Select
                            name="language"
                            label='Language'
                            value={values.language}
                            defaultValue='none'
                            onChange={handleInputChange}
                            options={langOptions}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DatePicker
                            value={values.postDate}
                            onChange={handleInputChange}
                            label='Date'
                            name='postDate'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CheckBox
                            name="isCompleted"
                            label='Completed'
                            checked={values.isCompleted}
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
            </Form>
        </Paper>
    )
};
