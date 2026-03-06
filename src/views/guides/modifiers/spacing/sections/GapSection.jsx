import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Gap adds space between children (flexbox gap)
<View gap="md">
  <View />
  <View />  {/* 15px gap between items */}
  <View />
</View>

// Works with row layout
<View row gap="lg">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</View>

// Responsive gap
<View gap={{ sm: 'sm', md: 'md', lg: 'lg' }}>
  ...
</View>

// Remove gap with noGap
<View gap="md" noGap={someCondition}>
  ...
</View>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Gap</Text>
      <Text text3>
        Gap adds consistent spacing between child elements. It uses CSS flexbox gap, which is cleaner than margins
        between items.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
