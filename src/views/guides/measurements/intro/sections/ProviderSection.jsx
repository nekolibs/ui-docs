import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { NekoUI, MeasurementHandler } from '@neko-os/ui'

// Option 1: Via NekoUI root provider
// Auto-detects from locale when measurementSystem is omitted
<NekoUI measurementSystem="imperial">
  {children}
</NekoUI>

// Option 2: Standalone MeasurementHandler
// Useful when not using NekoUI, or to override a section of the app
<MeasurementHandler measurementSystem="metric">
  {children}
</MeasurementHandler>

// Option 3: No provider at all
// Components fall back to OS locale detection automatically
<LengthText value={175} />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Provider Setup</Text>
      <Text text3>
        MeasurementHandler is included in the NekoUI root provider. Pass measurementSystem to set it app-wide.
        When omitted, components auto-detect from the OS locale. You can also use MeasurementHandler standalone
        to override a section of the tree.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
