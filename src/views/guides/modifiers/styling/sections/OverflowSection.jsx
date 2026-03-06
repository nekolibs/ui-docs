import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Hide overflow (clip content)
<View hiddenOverflow>
  <LargeContent />
</View>

// Enable scrolling
<View scroll height={300}>
  <LongContent />
</View>

// Scroll on specific axis
<View scrollY height={400}>   {/* Vertical scroll */}
  <LongContent />
</View>

<View scrollX width={300}>    {/* Horizontal scroll */}
  <WideContent />
</View>

// Disable scroll conditionally
<View scroll noScroll={isDisabled}>
  ...
</View>

// Note: For better scroll handling, use ScrollView component
import { ScrollView } from '@neko-os/ui'
<ScrollView>...</ScrollView>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Overflow</Text>
      <Text text3>
        Control how content overflows the container. Use scroll, scrollX, scrollY for scrollable areas.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
