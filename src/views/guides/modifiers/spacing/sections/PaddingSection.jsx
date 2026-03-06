import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// All sides
<View padding="md" />      // 15px all sides
<View padding="lg" />      // 20px all sides
<View padding={24} />      // 24px (custom value)

// Horizontal and Vertical
<View paddingH="md" />     // Left and Right
<View paddingV="lg" />     // Top and Bottom
<View paddingH="md" paddingV="sm" />

// Individual sides
<View paddingT="md" />     // Top only
<View paddingB="lg" />     // Bottom only
<View paddingL="sm" />     // Left only
<View paddingR="xl" />     // Right only

// Combining
<View padding="sm" paddingT="lg" />  // sm everywhere, lg on top

// Available sizes: xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Padding</Text>
      <Text text3>
        Padding controls the inner spacing of a component. Use theme size keys or numeric values.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
