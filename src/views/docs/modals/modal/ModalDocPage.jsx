import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomHeaderSample from './samples/CustomHeaderSample'
import FooterSample from './samples/FooterSample'
import ImperativeSample from './samples/ImperativeSample'
import NestedSample from './samples/NestedSample'
import NoLayoutSample from './samples/NoLayoutSample'
import OutsideClickSample from './samples/OutsideClickSample'
import ScrollSample from './samples/ScrollSample'
import SizeSample from './samples/SizeSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Modal</Text>

      <BasicUsageSample />
      <SizeSample />
      <ScrollSample />
      <CustomHeaderSample />
      <FooterSample />
      <NestedSample />
      <NoLayoutSample />
      <OutsideClickSample />
      <ImperativeSample />
    </View>
  )
}
