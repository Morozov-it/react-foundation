import React, { Suspense, lazy }  from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom";
//импорт отдельных компонент-страниц
import Main from './pages/Main'
const ContextPosts = lazy(() => import('./pages/ContextPosts'));
const ServerPosts = lazy(() => import('./pages/ServerPosts'));



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
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/context-posts" element={<ContextPosts />} />
            <Route path="/server-posts" element={<ServerPosts />} />
          </Routes>
          </Suspense>
      </Container>
    </Box>
  );
}
