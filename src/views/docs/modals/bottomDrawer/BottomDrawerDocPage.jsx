import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import DisableGestureCloseSample from './samples/DisableGestureCloseSample'
import DrawerFlatListSample from './samples/DrawerFlatListSample'
import DrawerScrollViewSample from './samples/DrawerScrollViewSample'
import NestedSample from './samples/NestedSample'
import ScrollSample from './samples/ScrollSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>BottomDrawer (native only)</Text>
        <Text orange strong>
          There is no BottomDrawer for web, so it fallsback to the Drawer component
        </Text>
      </View>

      <BasicUsageSample />
      <DisableGestureCloseSample />
      <ScrollSample />
      <NestedSample />

      <View>
        <Text h2>DrawerScrollView & DrawerFlatList</Text>
        <Text text3>Scroll components designed for use inside a BottomDrawer on native. They handle the gesture coordination between drawer panning and content scrolling. On web, they fall back to the regular ScrollView and FlatList.</Text>
      </View>

      <DrawerScrollViewSample />
      <DrawerFlatListSample />
    </View>
  )
}
