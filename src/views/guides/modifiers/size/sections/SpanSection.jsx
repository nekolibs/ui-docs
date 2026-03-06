import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// span uses a 24-column grid system
<View span={24} />   // 100% width
<View span={12} />   // 50% width
<View span={8} />    // 33.33% width
<View span={6} />    // 25% width

// Create grid layouts
<View row wrap>
  <View span={12}>Half</View>
  <View span={12}>Half</View>
</View>

<View row wrap>
  <View span={8}>Third</View>
  <View span={8}>Third</View>
  <View span={8}>Third</View>
</View>

// Responsive spans
<View span={{ sm: 24, md: 12, lg: 8 }}>
  {/* Full on mobile, half on tablet, third on desktop */}
</View>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Span (Grid)</Text>
      <Text text3>
        Span provides a 24-column grid system for percentage-based widths. Useful for creating grid layouts.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
