import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from './DataContext'
import CssBaseline from '@mui/material/CssBaseline';
import { ModeContext } from './ModeContext';
import { App } from './App';


ReactDOM.render(
  <BrowserRouter>
    <DataContextProvider>
    <CssBaseline />
    <ModeContext>
      <App />
    </ModeContext>
  </DataContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
