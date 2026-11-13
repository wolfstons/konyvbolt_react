import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KonyvContext,Provider } from './context/konyvContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KonyvContext.Provider>
      <App />
    </KonyvContext.Provider>
  </StrictMode>,
)
