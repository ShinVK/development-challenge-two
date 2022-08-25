import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins'
    },
    palette: {
      primary:  { main: '#292f36' },
      secondary: { main: '#e0fbfc' },
      background: { default: '#dee1dd'} 
    }
  })
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
