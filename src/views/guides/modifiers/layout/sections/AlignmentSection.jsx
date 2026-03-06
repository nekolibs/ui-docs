import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Center both axes
<View center>
  <Text>Centered content</Text>
</View>

// Center vertically only
<View centerV>
  <Text>Vertically centered</Text>
</View>

// Center horizontally only
<View centerH>
  <Text>Horizontally centered</Text>
</View>

// Align to edges
<View toRight>...</View>   // Align to right
<View toLeft>...</View>    // Align to left (default)
<View toBottom>...</View>  // Align to bottom
<View toTop>...</View>     // Align to top (default)

// Combine alignments
<View toRight toBottom>
  <Text>Bottom right corner</Text>
</View>

// Works in both row and column directions
<View row centerV>         {/* Vertical center in horizontal layout */}
  <Text>Centered vertically in row</Text>
</View>

// Raw flexbox props also available
<View justify="space-between" align="center" />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Alignment</Text>
      <Text text3>
        Alignment modifiers position children within the container. They work intuitively regardless of whether the
        layout is row or column.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
