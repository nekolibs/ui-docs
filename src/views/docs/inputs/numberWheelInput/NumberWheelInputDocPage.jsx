import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MinMaxSample from './samples/MinMaxSample'
import SuffixSample from './samples/SuffixSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>NumberWheelInput (native only)</Text>
        <Text orange strong>
          There is no NumberWheelInput for web, so it falls back to a NumberInput
        </Text>
      </View>

      <BasicUsageSample />
      <MinMaxSample />
      <SuffixSample />
    </View>
  )
}
