import { LayoutSider, Menu } from '@neko-os/ui'
import { useNavigate, useLocation } from 'react-router'

const SECTIONS = [
  { type: 'divider', label: 'Getting Started', line: false, marginT: 'xs' },
  { label: 'Installation & Setup', key: 'install' },

  { type: 'divider', label: 'Theme', marginT: 'xs' },
  { label: 'Theme', key: 'theme' },
  { label: 'Colors', key: 'themeColors' },
  { label: 'ThemeStatusBar', key: 'themeStatusBar' },
  { label: 'Custom Themes', key: 'customThemes' },
  { label: 'Changing Theme', key: 'themePicker' },

  { type: 'divider', label: 'Modifiers', marginT: 'xs' },
  { label: 'Introduction', key: 'modifiers' },
  { label: 'Spacing', key: 'modifiersSpacing' },
  { label: 'Layout', key: 'modifiersLayout' },
  { label: 'Size', key: 'modifiersSize' },
  { label: 'Background', key: 'modifiersBackground' },
  { label: 'Border', key: 'modifiersBorder' },
  { label: 'Shadow', key: 'modifiersShadow' },
  { label: 'Position', key: 'modifiersPosition' },
  { label: 'Overflow', key: 'modifiersOverflow' },

  { type: 'divider', label: 'Responsiveness', marginT: 'xs' },
  { label: 'Responsive', key: 'responsive' },

  { type: 'divider', label: 'Storage', marginT: 'xs' },
  { label: 'Storage', key: 'storage' },

  { type: 'divider', label: 'I18n', marginT: 'xs' },
  { label: 'I18n Intro', key: 'i18n' },
  { label: 'Translate Function', key: 'i18nTranslate' },
]

export default function DocsMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  // Extract the current doc key from the path (e.g., /docs/card -> card)
  const activeKey = location.pathname.split('/guides/')[1] || ''

  return (
    <LayoutSider width={300} borderR scrollY sticky bg="overlayBG">
      <Menu
        vertical
        items={SECTIONS}
        onChange={({ key }) => navigate(`/guides/${key}`)}
        activeKey={activeKey}
        paddingB="xxxl"
      />
    </LayoutSider>
  )
}
