import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import DividerSample from './samples/DividerSample'
import GroupSample from './samples/GroupSample'
import IconsSample from './samples/IconsSample'
import ItemClickSample from './samples/ItemClickSample'
import NestedSample from './samples/NestedSample'
import NestedVerticalSample from './samples/NestedVerticalSample'
import SizeSample from './samples/SizeSample'
import VerticalSample from './samples/VerticalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Menu</Text>

      <BasicUsageSample />
      <IconsSample />
      <ItemClickSample />
      <ColorsSample />
      <SizeSample />
      <NestedSample />
      <VerticalSample />
      <DividerSample />
      <GroupSample />
      <NestedVerticalSample />
    </View>
  )
}
