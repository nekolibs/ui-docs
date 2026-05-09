import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useAllThemes } from '@neko-os/ui'

function ThemeList() {
  const allThemes = useAllThemes()

  // Returns merged default + custom themes,
  // already filtered by disableDefaultThemes and enableOnlyThemes
  return Object.entries(allThemes).map(([key, theme]) => (
    <Text key={key}>{theme.label}</Text>
  ))
}
`

const FILTERING_CODE = `
import { NekoUI } from '@neko-os/ui'

// Remove all default themes except those you also define in your themes object
<NekoUI disableDefaultThemes themes={myThemes}>

// Remove specific default themes
<NekoUI disableDefaultThemes={['hacker', 'solarized']}>

// Only allow specific themes (removes everything else)
<NekoUI enableOnlyThemes={['light', 'dark']}>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>useAllThemes Hook</Text>
      <Text text3>
        Returns all available themes (defaults merged with custom), already filtered by the
        disableDefaultThemes and enableOnlyThemes props on the provider.
      </Text>
      <CodeBlock code={CODE} />
      <View gap="md">
        <Text h4>Filtering Themes</Text>
        <Text text3>
          Control which themes are available via ThemeHandler / NekoUI provider props.
        </Text>
        <CodeBlock code={FILTERING_CODE} />
      </View>
    </View>
  )
}
