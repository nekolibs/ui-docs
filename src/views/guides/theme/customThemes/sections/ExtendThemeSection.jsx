import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Extend an existing theme by specifying a base
// Only define the values you want to override

const myBrandTheme = {
  label: 'My Brand',
  base: 'light',  // Extends the light theme

  colors: {
    primary: '#FF6B35',  // Your brand color
    mainBG: '#FFFAF5',   // Slightly tinted background
  },
}

// The library automatically merges your theme with the base
// All other values (spaces, radius, texts, etc.) are inherited
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Extending a Theme</Text>
      <Text text3>
        The easiest way to create a custom theme is to extend an existing one using the base property. You only need to
        define the values you want to override.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
