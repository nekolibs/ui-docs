import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomMenuSample from './samples/CustomMenuSample'
import LazySample from './samples/LazySample'
import SegmentedMenuSample from './samples/SegmentedMenuSample'
import UnmountOnCloseSample from './samples/UnmountOnCloseSample'
import VerticalSample from './samples/VerticalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Tabs</Text>

      <BasicUsageSample />
      <VerticalSample />
      <LazySample />
      <UnmountOnCloseSample />
      <SegmentedMenuSample />
      <CustomMenuSample />
    </View>
  )
}
