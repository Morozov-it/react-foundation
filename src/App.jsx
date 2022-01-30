import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
//import { grey } from '@mui/material/colors';
//импорт компонент
import { ToggleModeBox } from './components/ToggleModeBox';

const styles = {
  page: {
    width: '100vw',
    height: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary'
  },
  container: {
    height: '100%'
  },
  box: {
    border: 1,
    boxShadow: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Container maxWidth="md" sx={styles.container} >
        <Box sx={styles.box}>
          <Typography variant="h3" component="h1">
            Posts
          </Typography>
          <ToggleModeBox />
        </Box>
      </Container>
    </Box>
  );
}
