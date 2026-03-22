import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Position types
<View absolute />    // position: absolute
<View relative />    // position: relative
<View fixed />       // position: fixed (web only, becomes absolute on mobile)
<View sticky />      // position: sticky (web only, becomes absolute on mobile)

// Position values (use theme space keys or numbers)
<View absolute top={0} left={0} />
<View absolute bottom="md" right="md" />
<View absolute top={10} right={10} />

// Fill parent completely
<View absoluteFill />   // absolute + top/right/bottom/left = 0
<View fixedFill />      // fixed + top/right/bottom/left = 0

// Z-index (absolute elements default to zIndex: 10)
<View absolute zIndex={100} />

// Common patterns
<View relative>
  <Image src="..." />
  <View absolute bottom={0} left={0} right={0} bg="backdrop">
    <Text>Overlay text</Text>
  </View>
</View>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Position</Text>
      <Text text3>
        Control positioning with absolute, relative, fixed, and sticky. Use absoluteFill to cover the entire parent.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
