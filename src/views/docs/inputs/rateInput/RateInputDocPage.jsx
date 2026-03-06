import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import FormSample from './samples/FormSample'
import IconsSample from './samples/IconsSample'
import RangeSample from './samples/RangeSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>RateInput</Text>

      <BasicUsageSample />
      <IconsSample />
      <ColorsSample />
      <RangeSample />
      <SizesSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
