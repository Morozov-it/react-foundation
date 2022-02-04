import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from './router';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//импорт отдельных компонент-страниц
import { Spinner } from './components/common/Spinner';
import { Navbar } from './components/common/Navbar';


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
            {routes.map((r) =>
              <Route key={r.id} path={r.path} element={r.element} />
            )}
          </Routes>
        </Container>
      </Suspense>
    </Box>
  );
}
