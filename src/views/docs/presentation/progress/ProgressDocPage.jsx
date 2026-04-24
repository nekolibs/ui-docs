import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import HeightSample from './samples/HeightSample'
import TargetSample from './samples/TargetSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Progress</Text>

      <BasicUsageSample />
      <TargetSample />
      <ColorsSample />
      <HeightSample />
    </View>
  )
}
