import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useResponsiveValue } from '@neko-os/ui'

function MyComponent() {
  // Returns the value for the current breakpoint
  const columns = useResponsiveValue({
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    df: 1,  // default fallback
  })

  const padding = useResponsiveValue({
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    df: 'md',
  })

  return (
    <Grid cols={columns} padding={padding}>
      ...
    </Grid>
  )
}

// Many components accept responsive values directly in props
<View
  padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
  gap={{ sm: 'xs', lg: 'md' }}
/>

<Grid cols={{ sm: 1, md: 2, lg: 4 }} />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Responsive Values</Text>
      <Text text3>
        Pass an object with breakpoint keys to get different values at different screen sizes. Use df for the default
        fallback value.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
