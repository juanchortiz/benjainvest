import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'

// Force rebuild - ContactSection deployment fix v2
createRoot(document.getElementById("root")!).render(<App />);
