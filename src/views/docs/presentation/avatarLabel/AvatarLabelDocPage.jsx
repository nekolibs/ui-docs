import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import SizesSample from './samples/SizesSample'
import SpaceSample from './samples/SpaceSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>AvatarLabel</Text>

      <BasicUsageSample />
      <ColorsSample />
      <SizesSample />
      <SpaceSample />
    </View>
  )
}
