import React from 'react';
//импорт стилевых компонент
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//импорт готовых компонент
import Input from '../controls/Input';



export const SearchingPost = ({searchPosts}) => {
    const [query, setQuery] = React.useState('')

    const handleSearch = (e) => {
        setQuery(e.target.value)
        //searchPosts(query)
    }
    //console.log(query)

    return (
        <Paper variant="outlined" sx={{ p: 1, mt: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Search posts
            </Typography>
            <Grid item xs={12} sm={8} md={6}>
                <Input
                    label="Search"
                    name='search'
                    value={query}
                    onChange={handleSearch}
                />
            </Grid>
        </Paper>
    )
};
