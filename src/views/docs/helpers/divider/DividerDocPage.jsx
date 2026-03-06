import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import LineSample from './samples/LineSample'
import SizesSample from './samples/SizesSample'
import VerticalSample from './samples/VerticalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Divider</Text>

      <BasicUsageSample />
      <LineSample />
      <ColorsSample />
      <SizesSample />
      <VerticalSample />
    </View>
  )
}
