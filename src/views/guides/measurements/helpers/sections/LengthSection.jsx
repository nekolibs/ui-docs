import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import {
  cmToIn, inToCm, cmToFt, ftToCm, cmToFtIn, ftInToCm,
  cmToM, mToCm, mToFt, ftToM, mToFtIn, ftInToM, mToIn, inToM,
  kmToMi, miToKm
} from '@neko-os/ui'

// Values are raw (unrounded) — formatters apply fixedDecimals for display

// Centimeters <-> Inches
cmToIn(175)     // ≈ 68.9
inToCm(68.9)    // ≈ 175

// Centimeters <-> Feet
cmToFt(175)     // ≈ 5.74
ftToCm(5.74)    // ≈ 175

// Centimeters <-> Feet + Inches (compound)
cmToFtIn(175)               // { feet: 5, inches: 9 }
ftInToCm({ feet: 5, inches: 9 })  // ≈ 175

// Centimeters <-> Meters
cmToM(175)      // 1.75
mToCm(1.75)     // 175

// Meters <-> Feet
mToFt(1.75)     // ≈ 5.74
ftToM(5.74)     // ≈ 1.75

// Meters <-> Feet + Inches
mToFtIn(1.75)   // { feet: 5, inches: 9 }
ftInToM({ feet: 5, inches: 9 })  // ≈ 1.75

// Kilometers <-> Miles
kmToMi(42)      // ≈ 26.1
miToKm(26.1)    // ≈ 42

// All functions return the input unchanged for falsy values
cmToIn(null)    // null
cmToIn(0)       // 0
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Length Conversions</Text>
      <Text text3>
        Pure functions for converting between metric and imperial length units.
        All functions handle falsy input gracefully.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
