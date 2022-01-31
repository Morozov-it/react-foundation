import React from 'react';
import { DataContext } from '../DataContext';
import { useForm, Form } from '../hooks/useForm'
//импорт стилевых компонент
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//импорт готовых компонент
import Input from '../controls/Input';
import RadioGroup from '../controls/RadioGroup';
import Select from '../controls/Select';
import CheckBox from '../controls/CheckBox';
import DatePicker from '../controls/DatePicker';


const initialState = {
    title: '',
    description: '',
    gender: '',
    language: '',
    isCompleted: false,
    postDate: new Date(),
    error: {}
}

export const AddPostForm = () => {
    const { addPost, genderItems, options } = React.useContext(DataContext);
    const { values, handleInputChange } = useForm(initialState);
    
    return (
        <Paper variant="outlined" sx={{ p: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Add a new post
            </Typography>
            <Form>
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
                            label='Sex of author'
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
                            onChange={handleInputChange}
                            options={options}/>
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
                </Grid>
            </Form>
        </Paper>
    )
};
