import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom";
//импорт отдельных компонент-страниц
import Posts from './pages/Posts'


const styles = {
  page: {
    bgcolor: 'background.default',
    color: 'text.primary'
  },
  container: {
    borderLeft: 1,
    borderRight: 1,
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Container maxWidth="md" sx={styles.container} >
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Container>
    </Box>
  );
}
