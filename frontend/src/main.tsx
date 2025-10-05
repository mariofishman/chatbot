import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { renderWidget, smContactWidgetConfig, mdContactWidgetConfig } from './lib/widgetUtils.tsx'

const widgetToShow = [smContactWidgetConfig, mdContactWidgetConfig];

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <App />
  {/* {renderWidget(widgetToShow[1])} */}
  {/* {renderWidget(widgetToShow[0])} */}
  </StrictMode>)
