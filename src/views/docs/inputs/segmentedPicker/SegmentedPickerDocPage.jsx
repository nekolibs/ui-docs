import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import FormSample from './samples/FormSample'
import IconsSample from './samples/IconsSample'
import RawOptionSample from './samples/RawOptionSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>SegmentedPicker</Text>

      <BasicUsageSample />
      <IconsSample />
      <SizesSample />
      <ColorsSample />
      <RawOptionSample />
      <FormSample />
    </View>
  )
}
