import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI } from '@neko-os/ui'

// The special _all key applies overrides to ALL themes
const themes = {
  _all: {
    colors: {
      primary: '#FF6B35',  // Your brand color in every theme
    },
    radius: {
      md: 12,  // Rounder corners across all themes
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

// This is useful for:
// - Applying brand colors across light and dark themes
// - Enforcing consistent spacing or radius
// - Adding custom component defaults to all themes
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Global Overrides with _all</Text>
      <Text text3>
        Use the special _all key to apply overrides across all themes at once. This is useful for brand consistency
        without duplicating values in each theme.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
