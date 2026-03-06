import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Fixed dimensions
<View width={200} height={100} />
<View width="50%" height="100vh" />

// Using theme element heights (xxxs to xxxl)
<View height="md" />   // 40px (from theme.elementHeights.md)
<View minH="lg" />     // min-height: 45px

// Min and Max constraints
<View minW={100} maxW={500} />
<View minH="sm" maxH={300} />

// Shorthand aliases
<View minW={100} />    // minWidth
<View maxW={500} />    // maxWidth
<View minH={50} />     // minHeight
<View maxH={200} />    // maxHeight
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Dimensions</Text>
      <Text text3>
        Control width and height with numeric values, CSS units, or theme element height keys.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
