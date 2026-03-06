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

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Setup</Text>
      <Text text3>
        The ThemeHandler is automatically included in the NekoUI provider. You just need to pass the themes object and
        the initial theme key.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
