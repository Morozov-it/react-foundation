import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ModeContext } from './ModeContext';
import {DataContextProvider} from './DataContext'


ReactDOM.render(
  <DataContextProvider>
    <CssBaseline />
    <ModeContext />
  </DataContextProvider>,
  document.getElementById('root')
);
