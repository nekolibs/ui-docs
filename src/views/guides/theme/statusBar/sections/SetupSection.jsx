import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { ThemeStatusBar } from '@neko-os/ui'

function App() {
  return (
    <>
      <ThemeStatusBar />
      {/* Rest of your app */}
    </>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Setup</Text>
      <Text text3>
        Add ThemeStatusBar at the root of your app. It will automatically adjust the status bar style based on the
        current theme.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
