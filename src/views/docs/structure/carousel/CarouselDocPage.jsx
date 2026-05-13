import { Text, View } from '@neko-os/ui'

import AutoplaySample from './samples/AutoplaySample'
import BasicUsageSample from './samples/BasicUsageSample'
import ComposableSample from './samples/ComposableSample'
import InfiniteCarouselSample from './samples/InfiniteCarouselSample'
import ControlledSample from './samples/ControlledSample'
import DotsArrowsSample from './samples/DotsArrowsSample'
import DraggableSample from './samples/DraggableSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Carousel</Text>

      <BasicUsageSample />
      <DotsArrowsSample />
      <DraggableSample />
      <AutoplaySample />
      <ControlledSample />
      <InfiniteCarouselSample />
      <ComposableSample />
    </View>
  )
}
