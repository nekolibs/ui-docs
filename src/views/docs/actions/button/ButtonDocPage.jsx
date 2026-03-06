import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import IconsSample from './samples/IconsSample'
import SegmentedSample from './samples/SegmentedSample'
import ShapesSample from './samples/ShapesSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'
import WidthSample from './samples/WidthSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Button</Text>

      <BasicUsageSample />
      <ColorsSample />
      <SizesSample />
      <ShapesSample />
      <IconsSample />
      <WidthSample />
      <SegmentedSample />
      <StateSample />
    </View>
  )
}
