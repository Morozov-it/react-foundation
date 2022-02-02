import React from 'react';
//импорт стилевых компонент
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//импорт готовых компонент
import Select from '../../controls/Select';
import Input from '../../controls/Input';



export const FilterPost = ({sortOptions, sortPosts, searchPosts }) => {
    const [sorted, setSorted] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handlerSelect = (sort) => {
        setSorted(sort)
        sortPosts(sort)
    }
    
    const handlerInput = (e) => {
        setSearch(e.target.value)
        searchPosts(e.target.value)
    }
    //console.log()
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
                        value={search}
                        onChange={handlerInput}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <Select
                        name="sorting"
                        label='Sorting'
                        value={sorted}
                        onChange={(e)=>handlerSelect(e.target.value)}
                        options={sortOptions}/>
                </Grid>
            </Grid>
        </Paper>
    )
};
