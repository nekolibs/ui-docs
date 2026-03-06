import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useResponsive } from '@neko-os/ui'

function MyComponent() {
  const { width, screen } = useResponsive()

  // width: current window width in pixels (e.g., 1200)
  // screen: current breakpoint name (e.g., 'lg')

  return (
    <View>
      <Text>Window width: {width}px</Text>
      <Text>Current breakpoint: {screen}</Text>
    </View>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>useResponsive Hook</Text>
      <Text text3>
        The useResponsive hook provides the current window width and the active breakpoint name.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
