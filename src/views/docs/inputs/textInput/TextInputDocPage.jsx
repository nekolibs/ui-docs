import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import FormSample from './samples/FormSample'
import IconsSample from './samples/IconsSample'
import PrefixSuffixSample from './samples/PrefixSuffixSample'
import SegmentedSample from './samples/SegmentedSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>TextInput</Text>

      <BasicUsageSample />
      <ColorsSample />
      <SizesSample />
      <IconsSample />
      <PrefixSuffixSample />
      <SegmentedSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
