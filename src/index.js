import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ModeContext } from './ModeContext';
import { DataContextProvider } from './DataContext'
import { App } from './App';


ReactDOM.render(
  <DataContextProvider>
    <CssBaseline />
    <ModeContext>
      <App />
    </ModeContext>
  </DataContextProvider>,
  document.getElementById('root')
);
