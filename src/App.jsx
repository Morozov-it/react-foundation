import React from 'react';
import { ToggleModeBox } from './components/ToggleModeBox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import { grey } from '@mui/material/colors';

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
  }
}

export function App() {
  return (
    <Box sx={styles.page}>
      <Container maxWidth="md" sx={styles.container} >
        <Box sx={styles.box}>
          <ToggleModeBox />
        </Box>
      </Container>
    </Box>
  );
}
