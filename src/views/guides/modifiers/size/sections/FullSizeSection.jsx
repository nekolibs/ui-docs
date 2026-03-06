import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Full width (100%)
<View fullW>
  <Text>Takes full width of parent</Text>
</View>

// Full height (100%) - web only
<View fullH>
  <Text>Takes full height of parent</Text>
</View>

// Combine both
<View fullW fullH center>
  <Text>Fills entire parent</Text>
</View>

// Common pattern: full-width card
<Card fullW padding="md">
  <Text>Full width card</Text>
</Card>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Full Size</Text>
      <Text text3>
        Use fullW and fullH for 100% width and height. Note that fullH only works on web.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
