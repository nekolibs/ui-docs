import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { fixedDecimals } from '@neko-os/ui'

// Limits decimal places (default: 2)
fixedDecimals(3.14159)     // 3.14
fixedDecimals(3.14159, 3)  // 3.142

// Preserves integers and short decimals
fixedDecimals(42)          // 42
fixedDecimals(1.5)         // 1.5

// Handles strings
fixedDecimals("3.14159")   // 3.14

// Returns falsy values unchanged
fixedDecimals(null)        // null
fixedDecimals(0)           // 0
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Number Formatting</Text>
      <Text text3>
        fixedDecimals limits decimal places without unnecessary rounding of short values.
        Available as a general helper from @neko-os/ui.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
