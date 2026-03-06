import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import DynamicColorsSample from './samples/DynamicColorsSample'
import IconsSample from './samples/IconsSample'
import ShapesSample from './samples/ShapesSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Avatar</Text>

      <BasicUsageSample />
      <ColorsSample />
      <DynamicColorsSample />
      <SizesSample />
      <ShapesSample />
      <IconsSample />
    </View>
  )
}
