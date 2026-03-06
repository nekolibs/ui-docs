import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import IconsSample from './samples/IconsSample'
import ShapesSample from './samples/ShapesSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Tag</Text>

      <BasicUsageSample />
      <ColorsSample />
      <SizesSample />
      <ShapesSample />
      <IconsSample />
      <StateSample />
    </View>
  )
}
