import React from 'react';
import { DataContext } from '../context/DataContext'
//импорт стилевых компонент
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
//импорт готовых компонент
import { LoginForm } from '../components/server/LoginForm';
import Button from '../controls/Button';

const styles = {
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        p: 1,
        width: 1,
        maxWidth: '500px',
        textAlign: 'center'
    }
}

export default function Login() {
    const { isAuth, setIsAuth } = React.useContext(DataContext);

    function logOut() {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <Box sx={styles.box}>
            {isAuth
                ?<Paper variant="outlined" sx={styles.paper}>
                    <Typography gutterBottom component="div">
                        You have already authorized. If you need to quit, please click the button bottom
                    </Typography>
                    <Box>
                        <Button
                        text='log out'
                        variant='contained'
                        onClick={logOut}
                        endIcon={<LogoutIcon />}/>
                    </Box>
                </Paper>
                :<LoginForm {...{setIsAuth}}/>
            }
        </Box>
    )
};
