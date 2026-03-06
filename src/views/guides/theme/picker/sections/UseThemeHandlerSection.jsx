import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useThemeHandler } from '@neko-os/ui'

function ThemeToggle() {
  const {
    activeThemeKey,      // Current theme key (e.g., 'light', 'dark')
    onChangeTheme,       // Change to a specific theme
    toggleTheme,         // Toggle between 'light' and 'dark'
    themes,              // All available themes
    openThemePicker,     // Open the theme picker drawer
  } = useThemeHandler()

  return (
    <Button onPress={toggleTheme}>
      Current: {activeThemeKey}
    </Button>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>useThemeHandler Hook</Text>
      <Text text3>
        The useThemeHandler hook provides access to the current theme state and methods to change themes.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
