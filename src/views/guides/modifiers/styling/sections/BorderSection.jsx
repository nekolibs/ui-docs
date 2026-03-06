import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Border radius (br) using theme values
<View br="sm" />     // Small radius
<View br="md" />     // Medium radius
<View br="lg" />     // Large radius
<View br={20} />     // Custom value

// Fully round (pill shape)
<View round />       // br=1000

// Directional radius
<View brT="lg" />    // Top corners only
<View brB="md" />    // Bottom corners only
<View brL="lg" />    // Left corners only
<View brR="md" />    // Right corners only

// Border width
<View border />              // 1px border, divider color
<View border={2} />          // 2px border
<View borderT />             // Top border only
<View borderB={2} />         // Bottom border, 2px
<View borderL borderR />     // Left and right borders

// Border color
<View border borderColor="primary" />
<View border brColor="red" />

// Combining
<View br="lg" border borderColor="primary" />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Border</Text>
      <Text text3>
        Use br for border radius and border for border width. Default border color is the theme divider color.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
