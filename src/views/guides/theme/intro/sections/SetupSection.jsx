import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI } from '@neko-os/ui'

function App() {
  return (
    <NekoUI initTheme="light">
      ...
    </NekoUI>
  )
}
`

const FILTERING_CODE = `
// Only allow specific themes
<NekoUI enableOnlyThemes={['light', 'dark']}>

// Remove specific default themes
<NekoUI disableDefaultThemes={['hacker', 'solarized']}>

// Remove all defaults, keep only your custom themes
<NekoUI disableDefaultThemes themes={myThemes}>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Setup</Text>
      <Text text3>
        The ThemeHandler is automatically included in the NekoUI provider. You just need to pass the themes object and
        the initial theme key.
      </Text>
      <CodeBlock code={CODE} />
      <View gap="md">
        <Text h4>Filtering Themes</Text>
        <Text text3>
          Use disableDefaultThemes or enableOnlyThemes to control which themes are available in ThemePicker and
          useAllThemes.
        </Text>
        <CodeBlock code={FILTERING_CODE} />
      </View>
    </View>
  )
}
