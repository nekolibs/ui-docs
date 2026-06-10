import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>LengthInput</Text>
      <Text text3>
        Input for length values with automatic metric/imperial conversion.
        Use metricPrecision to set the storage unit (cm, m, km) — onChange returns values in that unit.
        Use imperialPrecision to control the imperial display (in, ft, ft+in, mi). Defaults: cm / ft+in.
        In ft+in mode, uses FeetInchesInput with responsive drawer behavior on small screens.
      </Text>

      <BasicUsageSample />
    </View>
  )
}
