import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomHeaderSample from './samples/CustomHeaderSample'
import FooterSample from './samples/FooterSample'
import NestedSample from './samples/NestedSample'
import NoLayoutSample from './samples/NoLayoutSample'
import OutsideClickSample from './samples/OutsideClickSample'
import PositionSample from './samples/PositionSample'
import ScrollSample from './samples/ScrollSample'
import SizeSample from './samples/SizeSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>Drawer</Text>

        <Text orange strong>
          There is no Drawer for native yet, so it fallsback to the BottomDrawer component
        </Text>
      </View>

      <BasicUsageSample />
      <PositionSample />
      <SizeSample />
      <ScrollSample />
      <CustomHeaderSample />
      <FooterSample />
      <NestedSample />
      <NoLayoutSample />
      <OutsideClickSample />
    </View>
  )
}
