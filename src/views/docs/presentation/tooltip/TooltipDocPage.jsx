import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import IconSample from './samples/IconSample'
import PlacementSample from './samples/PlacementSample'
import SizeSample from './samples/SizeSample'
import TriggerSample from './samples/TriggerSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Tooltip</Text>

      <BasicUsageSample />
      <PlacementSample />
      <TriggerSample />
      <IconSample />
      <ColorsSample />
      <SizeSample />
    </View>
  )
}
