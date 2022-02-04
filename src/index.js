import ReactDOM from 'react-dom';
import { DataContextProvider } from './context/DataContext'
import CssBaseline from '@mui/material/CssBaseline';
import { ModeContext } from './context/ModeContext';
import { App } from './App';


ReactDOM.render(
  <>
    <CssBaseline />
    <ModeContext>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ModeContext>
  </>,
  document.getElementById('root')
);
