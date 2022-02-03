import React from 'react';
//импорт стилевых компонент
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//импорт готовых компонент
import Select from '../../controls/Select';
import Input from '../../controls/Input';

const options = [
    { id: '1', value: 'body', name: 'by description' },
    { id: '2', value: 'title', name: 'by title' },
]
const initialFilter = {
    sort: '',
    search: ''
}

export const PostFilter = ({ filter = initialFilter, setFilter }) => {
    const handlerType = (e) => {
        const { name, value } = e.target;
        setFilter({...filter, [name]: value })
    }
    return (
        <Paper variant="outlined" sx={{ p: 1, mt: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Filter posts
            </Typography>
            <Grid container spacing={1} sx={{alignItems: 'flex-end'}}>
                <Grid item xs={12} sm={9} md={8} >
                    <Input
                        label="Search"
                        name='search'
                        value={filter.search}
                        onChange={handlerType}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <Select
                        name="sort"
                        label='Sort'
                        value={filter.sort}
                        onChange={handlerType}
                        options={options}/>
                </Grid>
            </Grid>
        </Paper>
    )
};
