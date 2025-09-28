import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { renderWidget, smContactWidget, mdContactWidget } from './lib/widgetUtils.tsx'

const PREVIEW_MODE = true; // Toggle this
const widgetToShow = [smContactWidget, mdContactWidget];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {PREVIEW_MODE ? renderWidget(widgetToShow[1]) : <App />}
      {PREVIEW_MODE ? renderWidget(widgetToShow[0]) : <App />}
  </StrictMode>,
)
