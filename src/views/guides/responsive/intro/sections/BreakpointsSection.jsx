import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Default breakpoints
const DEFAULT_BREAKPOINTS = [
  { name: 'sm', value: 768 },   // < 768px
  { name: 'md', value: 1024 },  // 768px - 1024px
  { name: 'lg', value: 1440 },  // 1024px - 1440px
  { name: 'xl', value: 10000 }, // > 1440px
]

// Custom breakpoints can be passed to NekoUI
<NekoUI
  breakpoints={[
    { name: 'mobile', value: 480 },
    { name: 'tablet', value: 768 },
    { name: 'desktop', value: 1200 },
    { name: 'wide', value: 10000 },
  ]}
>
  ...
</NekoUI>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Breakpoints</Text>
      <Text text3>
        The responsive system uses breakpoints to determine the current screen size. The default breakpoints cover
        common device sizes, but you can customize them.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
