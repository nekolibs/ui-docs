import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import {
  kgToLbs, lbsToKg, kgToOz, ozToKg,
  gToOz, ozToG, gToLbs, lbsToG
} from '@neko-os/ui'

// Values are raw (unrounded) — formatters apply fixedDecimals for display

// Kilograms <-> Pounds
kgToLbs(80)     // ≈ 176.37
lbsToKg(176.37) // ≈ 80

// Kilograms <-> Ounces
kgToOz(0.5)     // ≈ 17.64
ozToKg(17.64)   // ≈ 0.5

// Grams <-> Ounces
gToOz(250)      // ≈ 8.82
ozToG(8.82)     // ≈ 250

// Grams <-> Pounds
gToLbs(500)     // ≈ 1.1
lbsToG(1.1)     // ≈ 500

// Handles falsy input
kgToLbs(null)   // null
kgToLbs(0)      // 0
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Weight Conversions</Text>
      <Text text3>
        Pure functions for converting between metric and imperial weight units.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
