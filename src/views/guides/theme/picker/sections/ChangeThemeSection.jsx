import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useThemeHandler } from '@neko-os/ui'

// Open the drawer from anywhere using the hook
function SettingsButton() {
  const { openThemePicker } = useThemeHandler()

  return <Button onPress={openThemePicker}>Pick Theme</Button>
}

// Toggle between light and dark
function SettingsButton() {
  const { toggleTheme } = useThemeHandler()

  return <Button onPress={toggleTheme}>Toggle Theme</Button>
}

`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Changing Theme</Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
