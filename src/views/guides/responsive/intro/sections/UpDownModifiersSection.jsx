import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useResponsiveValue } from '@neko-os/ui'

// Use 'u' suffix for "up" (this breakpoint and larger)
// Use 'd' suffix for "down" (this breakpoint and smaller)

const layout = useResponsiveValue({
  smd: 'mobile',   // sm and down (< 768px)
  mdu: 'desktop',  // md and up (>= 768px)
})

const columns = useResponsiveValue({
  lgd: 2,  // lg and down (< 1440px)
  lgu: 4,  // lg and up (>= 1024px)
})

// Useful for "mobile vs desktop" patterns
const isMobile = useResponsiveValue({
  mdd: true,   // md and down
  mdu: false,  // md and up
})
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Up/Down Modifiers</Text>
      <Text text3>
        Add u (up) or d (down) suffix to breakpoint names for range-based matching. This is useful for "mobile vs
        desktop" patterns without listing every breakpoint.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
