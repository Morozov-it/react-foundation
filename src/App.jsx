import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//импорт компонент
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';

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
    borderRadius: 1,
    boxShadow: 2,
    padding: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Container maxWidth="md" sx={styles.container} >
        <Box sx={styles.box}>
          <Header />
          <PostsList />
        </Box>
      </Container>
    </Box>
  );
}
