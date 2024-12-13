import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sample from './Sample/Sample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sample times={5} />
  </StrictMode>,
)
