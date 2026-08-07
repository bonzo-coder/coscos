import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CookieConsentBanner from './components/CookieConsentBanner.jsx'
import { initializeAnalytics } from './analytics'
import { LanguageProvider } from './assets/LanguageContext.jsx'

initializeAnalytics();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <CookieConsentBanner />
      <App />
    </LanguageProvider>
  </StrictMode>,
)
