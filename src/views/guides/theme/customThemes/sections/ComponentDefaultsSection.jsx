import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Override default props for any component via the components key
const themes = {
  _all: {
    components: {
      Card: {
        border: true,
      },
      Button: {
        br: 'xl',
      },
      Tag: {
        variant: 'outline',
      },
    },
  },
}

// You can also set component defaults per theme
const themes = {
  dark: {
    components: {
      Card: {
        border: true,
      },
    },
  },
  light: {
    components: {
      Card: {
        shadow: true,
      },
    },
  },
}
`

const CODE2 = `
// Any prop a component accepts can be set as a default
// These are applied as base values — per-instance props still override them

<Card />           // → gets border={true} from theme defaults
<Card border={false} />  // → per-instance prop wins
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Component Defaults</Text>
      <Text text3>
        Use the components key in your theme to set default prop values for any component. This lets you enforce
        consistent styling across your app without passing the same props everywhere.
      </Text>
      <CodeBlock code={CODE} />

      <Text text3>
        Any prop a component accepts can be used as a default. Per-instance props always take priority over theme
        defaults.
      </Text>
      <CodeBlock code={CODE2} />
    </View>
  )
}
