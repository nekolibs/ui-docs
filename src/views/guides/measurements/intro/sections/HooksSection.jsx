import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { useIsImperial, useMeasurementSystem } from '@neko-os/ui'

// Returns boolean — reads from context or detects from locale
const isImperial = useIsImperial()

// Accepts override — useful when building custom components
const isImperial = useIsImperial('imperial')  // true

// Returns string — "metric" or "imperial"
const system = useMeasurementSystem()

// Formatter hooks — return a function that formats values
import { useLengthFormatter, useWeightFormatter } from '@neko-os/ui'

// With precision props
const formatLength = useLengthFormatter({ metricPrecision: 'm', imperialPrecision: 'ft' })
formatLength(1.75)  // "1.75 m" or "5.74 ft"

const formatLength2 = useLengthFormatter({ imperialPrecision: 'in' })
formatLength2(175)  // "175 cm" or "68.9 in"

const formatWeight = useWeightFormatter({ metricPrecision: 'g' })
formatWeight(250)   // "250 g" or "8.82 oz"

const formatWeight2 = useWeightFormatter({ withoutSuffix: true })
formatWeight2(80)   // "176.37" or "80"
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Hooks</Text>
      <Text text3>
        Use useIsImperial and useMeasurementSystem to read the current system in custom components.
        The formatter hooks accept metricPrecision and imperialPrecision to control units,
        and return reusable functions for formatting values.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
