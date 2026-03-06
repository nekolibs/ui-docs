import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI } from '@neko-os/ui'
import { myBrandTheme, oceanTheme } from './themes'

// Just pass your custom themes — defaults are merged automatically
const themes = {
  brand: myBrandTheme,
  ocean: oceanTheme,
}

function App() {
  return (
    <NekoUI themes={themes} initTheme="brand">
      ...
    </NekoUI>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Registering Themes</Text>
      <Text text3>Pass your themes object to the NekoUI provider. The default themes are automatically included.</Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
