import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import DrawerSample from './samples/DrawerSample'
import LazySample from './samples/LazySample'
import NestedSample from './samples/NestedSample'
import PlacementSample from './samples/PlacementSample'
import SizeSample from './samples/SizeSample'
import TriggerSample from './samples/TriggerSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Popover</Text>

      <BasicUsageSample />
      <PlacementSample />
      <TriggerSample />
      <NestedSample />
      <LazySample />
      <SizeSample />
      <DrawerSample />
    </View>
  )
}
