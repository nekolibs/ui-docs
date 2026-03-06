import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const OVERRIDE_CODE = `
import { NekoUI } from '@neko-os/ui'

// Just define the colors you want to override
// Everything else is automatically merged from the defaults
const themes = {
  light: {
    colors: {
      primary: '#FF6B35',   // Your brand color
      mainBG: '#FFFAF5',    // Custom background
    },
  },
}

function App() {
  return (
    <NekoUI themes={themes} initTheme="light">
      ...
    </NekoUI>
  )
}
`

const FULL_CODE = `
// Create a fully custom color palette

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
    // Any accent colors you don't override are inherited from the base
  },
}
`

const ALL_CODE = `
import { NekoUI } from '@neko-os/ui'

// The special _all key applies color overrides to ALL themes
const themes = {
  _all: {
    colors: {
      primary: '#FF6B35',  // Same brand color in every theme
    },
  },
}

function App() {
  return (
    <NekoUI themes={themes} initTheme="light">
      ...
    </NekoUI>
  )
}

// _all overrides are applied after theme resolution, so they
// take effect on both light, dark, and any custom themes
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Customizing Colors</Text>
      <Text text3>
        You can override any color in a theme. All color variants (lighten, darken, opacity) are automatically
        regenerated for your custom colors.
      </Text>

      <Text h5>Override specific colors</Text>
      <Text text3>
        Just define the colors you want to change. The rest are automatically merged from the default themes.
      </Text>
      <CodeBlock code={OVERRIDE_CODE} />

      <Text h5>Full custom palette</Text>
      <Text text3>
        For a completely custom look, define all the colors you need. Any accent colors you skip are inherited from the
        base theme.
      </Text>
      <CodeBlock code={FULL_CODE} />

      <Text h5>Global color overrides</Text>
      <Text text3>
        Use the _all key to apply the same color overrides across every theme. This is ideal for enforcing a brand color
        consistently.
      </Text>
      <CodeBlock code={ALL_CODE} />
    </View>
  )
}
