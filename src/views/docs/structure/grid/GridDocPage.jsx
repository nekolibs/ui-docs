import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import GapSample from './samples/GapSample'
import GridSample from './samples/GridSample'
import HorizontalGapSample from './samples/HorizontalGapSample'
import ResponsiveSample from './samples/ResponsiveSample'
import SpanSample from './samples/SpanSample'
import VerticalGapSample from './samples/VerticalGapSample'
import WidthSample from './samples/WidthSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Grid</Text>

      <BasicUsageSample />
      <WidthSample />
      <SpanSample />
      <GapSample />
      <VerticalGapSample />
      <HorizontalGapSample />
      <ResponsiveSample />
      <GridSample />
    </View>
  )
}
