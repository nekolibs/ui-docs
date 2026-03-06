import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useTheme, useColors, useSpaces, useRadius } from '@neko-os/ui'

function MyComponent() {
  // Get the entire theme object
  const theme = useTheme()

  // Get specific theme groups
  const colors = useColors()
  const spaces = useSpaces()
  const radius = useRadius()

  // Access values
  console.log(colors.primary)  // '#818DF9'
  console.log(spaces.md)       // 15
  console.log(radius.lg)       // 10

  return ...
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Using Theme Values</Text>
      <Text text3>Access theme values in your components using the provided hooks.</Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
