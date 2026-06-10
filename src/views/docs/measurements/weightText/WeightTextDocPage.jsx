import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>WeightText</Text>
      <Text text3>
        Displays a weight value with automatic metric/imperial conversion.
        Use metricPrecision to set the storage/display unit (kg, g) and imperialPrecision
        to control the imperial display (lbs, oz). Defaults: kg / lbs.
      </Text>

      <BasicUsageSample />
    </View>
  )
}
