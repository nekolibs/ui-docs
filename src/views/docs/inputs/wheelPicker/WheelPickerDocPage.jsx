import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import FormatLabelSample from './samples/FormatLabelSample'
import RangeSample from './samples/RangeSample'
import SuffixSample from './samples/SuffixSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>WheelPicker (native only)</Text>
        <Text orange strong>
          There is no WheelPicker for web, so it falls back to a NumberInput
        </Text>
      </View>

      <BasicUsageSample />
      <RangeSample />
      <SuffixSample />
      <FormatLabelSample />
    </View>
  )
}
