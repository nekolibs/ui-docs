import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// flex={true} or just flex makes element grow to fill space
<View flex>
  <Text>I fill available space</Text>
</View>

// Useful for layouts
<View row>
  <View width={200}>Sidebar</View>
  <View flex>Main content takes remaining space</View>
</View>

// Flex with numeric value for proportion
<View row>
  <View flex={1}>1/3 of space</View>
  <View flex={2}>2/3 of space</View>
</View>

// Common pattern: header, content, footer
<View flex>
  <View>Header</View>
  <View flex>Content fills middle</View>
  <View>Footer</View>
</View>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Flex</Text>
      <Text text3>
        The flex modifier makes an element grow to fill available space. Use numeric values for proportional sizing.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
