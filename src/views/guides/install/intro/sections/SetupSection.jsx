import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI } from '@neko-os/ui'

function App() {
  return (
    <NekoUI initTheme="light">
      {/* Your app content */}
    </NekoUI>
  )
}
`

export default function SetupSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Setup</Text>
        <Text text3>
          Wrap your application with the NekoUI provider. This sets up the theme system, responsive handlers, and all
          internal context needed by the components.
        </Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
