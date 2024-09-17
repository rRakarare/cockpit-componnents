import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Application.tsx'
import './index.css'
import { ThemeProvider } from './components/layout/_components/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </StrictMode>,
)
