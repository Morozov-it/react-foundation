import React from 'react';
//импорт стилевых компонент
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
//импорт готовых компонент
import Select from '../controls/Select';
import Button from '../controls/Button';


export const SortingPost = ({sortOptions, sortPosts}) => {
    const [data, setData] = React.useState('')

    const handlerSelect = (e) => {
        setData(e.target.value)
        sortPosts(e.target.value)
    }
    const canselSort = () => {
        setData('')
        sortPosts('')
    }
    //console.log(data)

    return (
        <Paper variant="outlined" sx={{ p: 1, mt: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                Posts sorting
            </Typography>
            <Grid container spacing={1} sx={{alignItems: 'flex-end'}}>
                <Grid item xs={12} sm={6} md={6}>
                    <Select
                        name="sorting"
                        label='Sorting'
                        value={data}
                        onChange={handlerSelect}
                        options={sortOptions}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Stack sx={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'}}>
                        <Button
                            onClick={canselSort}
                            variant='outlined'
                            text='cancel sort'/>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
};
