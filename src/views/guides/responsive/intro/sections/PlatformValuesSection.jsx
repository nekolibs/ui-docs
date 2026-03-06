import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useResponsiveValue } from '@neko-os/ui'

// Use 'native' and 'web' for platform-specific values
const padding = useResponsiveValue({
  native: 'sm',  // iOS and Android
  web: 'lg',     // Web browser
})

const behavior = useResponsiveValue({
  native: 'drawer',
  web: 'modal',
  df: 'modal',  // fallback
})

// Combine with breakpoints
const layout = useResponsiveValue({
  native: 'stack',
  web: {
    sm: 'stack',
    md: 'side-by-side',
  },
})
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Platform-Specific Values</Text>
      <Text text3>
        Use native and web keys to provide different values based on the platform. Platform values take priority over
        breakpoint values.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
