import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Card } from '@neko-os/ui'

// Default shadow using theme shadow color
<View shadow />
<Card shadow />

// Custom shadow color
<View shadow="primary" />
<View shadow="primary_op30" />
<View shadow="rgba(0,0,0,0.2)" />

// Shadows work on both web and mobile
// Web: uses box-shadow
// Mobile: uses React Native shadow props + elevation
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Shadow</Text>
      <Text text3>
        The shadow modifier adds a drop shadow. Pass true for default or a color name for custom shadow color.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
