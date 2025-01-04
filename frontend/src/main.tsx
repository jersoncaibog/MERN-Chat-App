import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider.tsx'
import { BrowserRouter } from "react-router";
import { ColorModeProvider } from "@/components/ui/color-mode"

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
