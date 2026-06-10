import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>WeightInput</Text>
      <Text text3>
        Input for weight values with automatic metric/imperial conversion.
        Use metricPrecision to set the storage unit (kg, g) — onChange returns values in that unit.
        Use imperialPrecision to control the imperial display (lbs, oz). Defaults: kg / lbs.
      </Text>

      <BasicUsageSample />
    </View>
  )
}
