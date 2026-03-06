import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import IconsSample from './samples/IconsSample'
import RangeSample from './samples/RangeSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Rate</Text>

      <BasicUsageSample />
      <IconsSample />
      <ColorsSample />
      <RangeSample />
      <SizesSample />
    </View>
  )
}
