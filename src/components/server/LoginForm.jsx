import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
//импорт готовых компонент
import Input from '../../controls/Input';
import Button from '../../controls/Button';


const initialState = {
    login: '',
    password: ''
}

export const LoginForm = ({ setIsAuth }) => {
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
        event.preventDefault()
        setIsAuth(true)
        //сохранение авторизации в localStorage
        localStorage.setItem('auth', 'true')
        handleFormReset()
    };

    return (
        <Paper variant="outlined" sx={{ p: 1, width: 1, maxWidth: '500px' }}>
            <Typography variant="h6" gutterBottom component="div">
                Log in
            </Typography>
            <Box component="form"
            autoComplete="off"
            onReset={handleFormReset}
            onSubmit={onSubmit}>
                <Stack spacing={2}>
                    <Box>
                        <Input
                            label="Login"
                            name='login'
                            value={values.login}
                            onChange={handleInputChange}
                        />
                    </Box>
                    <Box>
                        <Input
                            label="Password"
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleInputChange}
                        />    
                    </Box>
                </Stack>
                <Stack
                    sx={{ mt: 2, justifyContent: 'space-between' }}
                    direction="row">
                    <Button
                        text='registration'
                        onClick={()=>{}}/>
                    <Button
                        type='submit'
                        text='log in'
                        variant='contained'
                        endIcon={<LoginIcon />}/>
                </Stack>
            </Box>
        </Paper>
    )
};
