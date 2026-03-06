import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI, DEFAULT_THEMES, Storage } from '@neko-os/ui'

function App() {
  // Storage.useState syncs state with storage automatically
  const [theme, setTheme] = Storage.useState('theme', 'light')

  return (
    <NekoUI
      themes={DEFAULT_THEMES}
      initTheme={theme}
      onChangeTheme={setTheme}
    >
      ...
    </NekoUI>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Persisting Theme Selection</Text>
      <Text text3>
        Use Storage.useState to automatically persist the theme selection. It works on both web and mobile.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
