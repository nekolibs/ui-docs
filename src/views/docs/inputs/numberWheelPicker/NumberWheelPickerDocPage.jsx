import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MinMaxSample from './samples/MinMaxSample'
import PrecisionSample from './samples/PrecisionSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>NumberWheelPicker (native only)</Text>
        <Text orange strong>
          There is no NumberWheelPicker for web, so it falls back to a NumberInput
        </Text>
      </View>

      <BasicUsageSample />
      <MinMaxSample />
      <PrecisionSample />
    </View>
  )
}
