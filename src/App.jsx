import React from 'react';
//импорт стилевых компонент
import { Box, Container } from '@mui/material';
//импорт компонент
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { AddPostForm } from './components/AddPostForm';

const styles = {
  page: {
    width: '100vw',
    overFlow: 'auto',
    bgcolor: 'background.default',
    color: 'text.primary'
  },
  container: {

  },
  box: {
    border: 1,
    borderRadius: 1,
    boxShadow: 2,
    padding: 1,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  mainItem: {
    flex: '1 1 auto'
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Container maxWidth="md" sx={styles.container} >
        <Box sx={styles.box}>
          <Header />
          <AddPostForm />
          <PostsList sx={styles.mainItem}/>
        </Box>
      </Container>
    </Box>
  );
}
