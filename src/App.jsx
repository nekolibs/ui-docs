import '/node_modules/@neko-os/ui/src/index.css'

import { BrowserRouter } from 'react-router'
import { NekoUI, Storage } from '@neko-os/ui'

import { i18n } from './locales'
import AppRoutes from './views/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <NekoUI initTheme={Storage.get('theme') || 'dark'} onChangeTheme={(v) => Storage.set('theme', v)} i18n={i18n}>
        <AppRoutes />
      </NekoUI>
    </BrowserRouter>
  )
}

export default App
