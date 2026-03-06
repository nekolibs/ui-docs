import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import FormSample from './samples/FormSample'
import IconsSample from './samples/IconsSample'
import MinMaxSample from './samples/MinMaxSample'
import PrecisionSample from './samples/PrecisionSample'
import PrefixSuffixSample from './samples/PrefixSuffixSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>NumberInput</Text>

      <BasicUsageSample />
      <MinMaxSample />
      <PrecisionSample />
      <ColorsSample />
      <SizesSample />
      <IconsSample />
      <PrefixSuffixSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
