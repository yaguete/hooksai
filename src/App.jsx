import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Pricing from './pages/pricing/pricing';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: {
      textTransform: 'none', // Evitar que los botones tengan texto en mayúsculas
    },
  },
  palette: {
    primary: {
      main: '#E6F5FB',
    },
    secondary: {
      main: '#03a9f4',
    },
  },
  // Activar Material Design 3
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'tonal', // Configura el estilo predeterminado si lo deseas
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          padding: '0px', 
          margin: '0px',
          width: '100%',
          height: '100%',
        },
      },
    },
  },},);


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pricing" element={<Pricing />}/>
          </Routes>
      </ThemeProvider>
    </ Router>
  )
}

export default App



/* return (
  <>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
)
}*/
