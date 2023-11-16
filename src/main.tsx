import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'
import { TypographyComponent } from '@/components/ui/typography/TypographyComponent'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />

    <TypographyComponent href={'google.com'} as={'a'} variantName={'Large'}>
      Hello My name is Evgen. Nice to meet you.
    </TypographyComponent>
  </StrictMode>
)
