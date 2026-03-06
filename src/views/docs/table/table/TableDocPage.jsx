import { Text, View } from '@neko-os/ui'

import AlignSample from './samples/AlignSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BorderedColsSample from './samples/BorderedColsSample'
import ColsWidthSample from './samples/ColsWidthSample'
import RawSample from './samples/RawSample'
import SizeSample from './samples/SizeSample'
import StickyColsSample from './samples/StickyColsSample'
import StickyHeaderAndColumnsSample from './samples/StickyHeaderAndColumnsSample'
import StickyHeaderSample from './samples/StickyHeaderSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Table</Text>

      <BasicUsageSample />
      <ColsWidthSample />
      <StickyColsSample />
      <StickyHeaderSample />
      <StickyHeaderAndColumnsSample />
      <SizeSample />
      <BorderedColsSample />
      <AlignSample />
      <RawSample />
    </View>
  )
}
