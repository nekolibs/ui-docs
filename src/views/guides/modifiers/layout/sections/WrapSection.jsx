import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// By default, flex items don't wrap
<View row>
  {items.map(item => <Card />)}  {/* May overflow */}
</View>

// Use wrap to allow items to wrap to next line
<View row wrap gap="md">
  {items.map(item => <Card />)}  {/* Wraps to new rows */}
</View>

// Common pattern: responsive grid-like layout
<View row wrap gap="md">
  <View width={200}>Item 1</View>
  <View width={200}>Item 2</View>
  <View width={200}>Item 3</View>
  <View width={200}>Item 4</View>
</View>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Wrap</Text>
      <Text text3>
        The wrap modifier allows flex items to wrap to the next line when they exceed the container width.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
