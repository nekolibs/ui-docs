import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Theme colors
<View bg="mainBG" />
<View bg="overlayBG" />
<View bg="primary" />
<View bg="red" />

// Color variants
<View bg="primary-20" />    // Lighter
<View bg="primary+20" />    // Darker
<View bg="primary_op50" />  // 50% opacity

// Custom colors
<View bg="#FF5733" />
<View bg="rgba(255, 87, 51, 0.5)" />

// Gradients (pass array of colors)
<View bg={['primary', 'blue']} />
<View bg={['red', 'orange', 'yellow']} angle={90} />
<View colors={['green', 'blue']} angle={45} />

// Transparent
<View bg="transparent" />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Background</Text>
      <Text text3>
        Use bg for background colors. Pass an array for gradients with optional angle prop.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
