import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Default is column (vertical stack)
<View>
  <Text>First</Text>
  <Text>Second</Text>   {/* Stacked vertically */}
  <Text>Third</Text>
</View>

// Use row for horizontal layout
<View row>
  <Text>First</Text>
  <Text>Second</Text>   {/* Side by side */}
  <Text>Third</Text>
</View>

// Or use direction prop explicitly
<View direction="row" />
<View direction="column" />
<View direction="row-reverse" />
<View direction="column-reverse" />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Direction</Text>
      <Text text3>
        Views default to column (vertical) direction. Use row to layout children horizontally.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
