import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Priority (highest to lowest):

// 1. Component prop — explicit override on a single component
<LengthText value={175} measurementSystem="imperial" />

// 2. Provider context — set via MeasurementHandler or NekoUI
<MeasurementHandler measurementSystem="metric">
  <LengthText value={175} />  // uses "metric" from provider
</MeasurementHandler>

// 3. OS locale detection — automatic fallback
// Web:    Intl.Locale API or navigator.language heuristic
// Mobile: expo-localization (Localization.getLocales())
<LengthText value={175} />  // detects from device
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Fallback Chain</Text>
      <Text text3>
        The measurement system is resolved in order: component prop, then provider context, then OS locale.
        This lets you set a default at the app level while allowing per-component overrides.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
