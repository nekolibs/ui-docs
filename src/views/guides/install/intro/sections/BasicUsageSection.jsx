import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Text, Button } from '@neko-os/ui'

function MyScreen() {
  return (
    <View flex padding="lg" gap="md" bg="mainBG">
      <Text h2>Welcome</Text>
      <Text text3>Start building with modifier-based styling.</Text>
      <Button label="Get Started" primary />
    </View>
  )
}
`

export default function BasicUsageSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Basic Usage</Text>
        <Text text3>
          Import components directly from @neko-os/ui and use modifier props for styling. No CSS files or style objects
          needed.
        </Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
