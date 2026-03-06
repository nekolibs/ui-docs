import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Button } from '@neko-os/ui'

// Aspect ratio maintains proportions
<View width={200} ratio={16/9} />  // 16:9 video ratio
<View width={200} ratio={1} />     // Perfect square
<View width={200} ratio={4/3} />   // 4:3 photo ratio

// square is shorthand for ratio={1}
<View width={100} square />
<Button icon="star" square />     // Square icon button

// Common pattern: avatar or thumbnail
<Image src="..." width={80} square br="lg" />

// Responsive square buttons
<Button icon="menu" ratio={1} />
<Button icon="close" ratio={1} />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Aspect Ratio</Text>
      <Text text3>
        Use ratio to maintain aspect proportions. The square modifier is a shorthand for ratio=1.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
