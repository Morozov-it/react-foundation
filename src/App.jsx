import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//импорт отдельных компонент-страниц
import { Spinner } from './components/common/Spinner';
import { Navbar } from './components/common/Navbar';
const Main = lazy(() => import('./pages/Main'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ContextPosts = lazy(() => import('./pages/ContextPosts'));
const ServerPosts = lazy(() => import('./pages/ServerPosts'));
const PostIdPage = lazy(() => import('./pages/PostIdPage'));


const styles = {
  page: {
    minWidth: '100vw',
    minHeight: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary'
  },
  container: {
    paddingTop: {
      xs: 8, 
      sm: 9, 
      md: 10
    }
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Container sx={styles.container} maxWidth="md" >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/context" element={<ContextPosts />} />
            <Route path="/server" element={<ServerPosts />} />
            <Route path="/server/:id" element={<PostIdPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Suspense>
    </Box>
  );
}
