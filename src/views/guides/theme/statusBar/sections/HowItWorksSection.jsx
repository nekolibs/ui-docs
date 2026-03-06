import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// ThemeStatusBar automatically detects if the theme is dark or light
// and sets the appropriate status bar style

// For dark themes: light status bar text
// For light themes: dark status bar text

// The component uses the isDark property from the theme:
const { isDark } = useTheme()

<StatusBar style={isDark ? 'dark' : 'light'} />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>How It Works</Text>
      <Text text3>
        ThemeStatusBar reads the isDark property from the current theme and automatically switches the status bar style
        to ensure text remains visible against the background.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
