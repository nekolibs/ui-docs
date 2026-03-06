import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Text, Button } from '@neko-os/ui'

// Instead of writing styles like this:
<View style={{ padding: 15, backgroundColor: '#fff', borderRadius: 10 }}>
  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Hello</Text>
</View>

// You can use modifiers as props:
<View padding="md" bg="overlayBG" br="lg">
  <Text strong center>Hello</Text>
</View>

// Modifiers are declarative, theme-aware, and responsive
<View
  padding={{ sm: 'sm', md: 'lg' }}
  bg="primary"
  br="md"
  shadow
/>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Introduction</Text>
      <Text text3>
        Modifiers are props that translate to styles. They provide a declarative, theme-aware way to style components
        without writing inline styles. Most neko-os/ui components support modifiers.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
