import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>LengthText</Text>
      <Text text3>
        Displays a length value with automatic metric/imperial conversion.
        Use metricPrecision to set the storage/display unit (cm, m, km) and imperialPrecision
        to control the imperial display (in, ft, ft+in, mi). Defaults: cm / ft+in.
      </Text>

      <BasicUsageSample />
    </View>
  )
}
