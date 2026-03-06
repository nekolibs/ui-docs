import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Create a new theme with full color customization
// Base defaults to 'light' if not specified

const oceanTheme = {
  label: 'Ocean',
  base: 'light',

  colors: {
    primary: '#0077B6',
    text: '#023E8A',
    text2: '#0096C7',
    text3: '#48CAE4',
    text4: '#90E0EF',

    mainBG: '#CAF0F8',
    overlayBG: '#FFFFFF',
    backdrop: '#03045E',
    shadow: 'rgba(3, 4, 94, 0.15)',
    divider: '#90E0EF',

    blue: '#0077B6',
    green: '#06D6A0',
    red: '#EF476F',
    yellow: '#FFD166',
  },
}

// For dark themes, use 'dark' as base
const oceanDarkTheme = {
  label: 'Ocean Dark',
  base: 'dark',

  colors: {
    primary: '#48CAE4',
    mainBG: '#03045E',
    overlayBG: '#023E8A',
    // ... dark variants
  },
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Creating a Theme</Text>
      <Text text3>
        Define your colors and the library handles the rest. The isDark property is automatically calculated based on
        the overlayBG color brightness.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
