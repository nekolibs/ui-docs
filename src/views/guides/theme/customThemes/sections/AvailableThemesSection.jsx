import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { DEFAULT_THEMES } from '@neko-os/ui'

// Available built-in themes:
// - light: Default light theme
// - dark: Default dark theme
// - paper: Paper-like light theme
// - black: Pure black dark theme (OLED friendly)
// - cyberpunk: Cyberpunk styled theme
// - hacker: Matrix-inspired green theme
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Available Themes</Text>
      <Text text3>The library comes with several built-in themes that you can use directly or extend.</Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
