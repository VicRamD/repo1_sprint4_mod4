import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { FavoriteListProvider } from './contexts/FavoriteListContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FavoriteListProvider>
          <App />
      </FavoriteListProvider>
    </ThemeProvider>
  </StrictMode>,
)
