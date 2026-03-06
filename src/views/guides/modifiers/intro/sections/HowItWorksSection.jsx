import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Modifiers use theme values automatically
<View padding="md" />
// "md" is resolved from theme.spaces.md (default: 15)

<View bg="primary" />
// "primary" is resolved from theme.colors.primary

<View br="lg" />
// "lg" is resolved from theme.radius.lg (default: 10)

// You can also use numeric values directly
<View padding={20} br={8} />

// Or any valid CSS value
<View width="50%" height="100vh" />

// Modifiers support responsive values
<View padding={{ sm: 'sm', md: 'md', lg: 'lg' }} />

// And color variants
<View bg="primary-20" />  // Lighter primary
<View bg="primary+20" />  // Darker primary
<View bg="primary_op50" /> // 50% opacity primary
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>How It Works</Text>
      <Text text3>
        Modifiers automatically resolve theme values. When you pass a string like "md" or "primary", it looks up the
        corresponding value in the theme. Numbers and CSS values are used as-is.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
