import React, { Suspense } from 'react';
import { DataContext } from './context/DataContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from './router';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//импорт отдельных компонент-страниц
import { Spinner } from './components/common/Spinner';
import { Navbar } from './components/common/Navbar';


const styles = {
  page: {
    minHeight: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary',
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
  //получение данных из контекста
  const { isAuth, setIsAuth } = React.useContext(DataContext);

  React.useEffect(() => {
    //при первом рендере проверка поля авторизации в localStorage
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <Box sx={styles.page}>
        <Navbar {...{isAuth}}/>
        <Suspense fallback={<Spinner />}>
          <Container sx={styles.container} maxWidth="md" >
          {isAuth
            ?<Routes>{privateRoutes.map((r) =>
                <Route key={r.id} path={r.path} element={r.element} />)}
            </Routes>
            :<Routes>{publicRoutes.map((r) =>
                <Route key={r.id} path={r.path} element={r.element} />)}
            </Routes>
          }
          </Container>
        </Suspense>
      </Box>
    </BrowserRouter>
  );
}
