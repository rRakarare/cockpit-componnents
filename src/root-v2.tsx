import { StrictMode } from 'react'
import App from './App-v2.tsx'
import './index-v2.css'
import { ThemeProvider } from './components-v2/layout/_components/theme-provider.tsx'

function Root() {
  return (
    <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </StrictMode>
  )
}

export default Root