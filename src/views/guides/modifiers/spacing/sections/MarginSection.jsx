import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// All sides
<View margin="md" />       // 15px all sides

// Horizontal and Vertical
<View marginH="md" />      // Left and Right
<View marginV="lg" />      // Top and Bottom

// Individual sides
<View marginT="md" />      // Top only
<View marginB="lg" />      // Bottom only
<View marginL="sm" />      // Left only
<View marginR="xl" />      // Right only

// Common patterns
<View marginT="lg" />      // Space above element
<View marginB="xl" />      // Space below element
<View marginH="auto" />    // Center horizontally (web)
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Margin</Text>
      <Text text3>
        Margin controls the outer spacing around a component. Same syntax as padding.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
