import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Using space values in components
<View padding="md" gap="sm" margin="lg">
  ...
</View>

// Available sizes (smallest to largest):
// xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl

// Components also support directional spacing:
<View paddingH="md" paddingV="sm">  // Horizontal and Vertical
<View paddingT="lg" paddingB="sm">  // Top and Bottom
<View paddingL="md" paddingR="md">  // Left and Right
<View marginH="lg" marginV="md">    // Same for margins
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Spaces</Text>
      <Text text3>
        Spacing values follow a consistent scale from xxxs to xxxl. Use these for padding, margin, and gap props.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
