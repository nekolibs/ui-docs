import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { LengthText, WeightText, LengthInput, WeightInput } from '@neko-os/ui'

// Display values — auto-converts based on measurement system
<LengthText value={175} />   // "175 cm" or "5'9\\""
<WeightText value={80} />    // "80 kg" or "176.37 lbs"

// Input values — stores in metric, displays in current system
<LengthInput value={height} onChange={setHeight} />
<WeightInput value={weight} onChange={setWeight} />

// Precision props — control the storage/display unit per system
<LengthText value={1.75} metricPrecision="m" />                  // "1.75 m" or "5.74 ft"
<LengthText value={42} metricPrecision="km" />                    // "42 km" or "26.1 mi"
<WeightText value={250} metricPrecision="g" />                    // "250 g" or "8.82 oz"
<LengthText value={175} imperialPrecision="in" />                 // "175 cm" or "68.9 in"
<LengthInput value={1.75} metricPrecision="m" imperialPrecision="ft" onChange={setHeight} />
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Introduction</Text>
      <Text text3>
        The measurement system provides components and helpers for handling imperial/metric conversion across platforms.
        Values are stored in the metric unit defined by metricPrecision (defaults: cm for length, kg for weight).
        Display converts automatically based on the user's measurement system.
        Use metricPrecision to control the storage/metric display unit, and imperialPrecision to control the imperial display unit.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
